from typing import Generator, Optional
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from jose import jwt, JWTError

from app.core.config import settings
from app.core.security import decode_token
from app.db.session import get_db
from app.services.user_service import UserService
from app.models.user import User, UserRole


# HTTP Bearer token scheme
security = HTTPBearer()


def get_current_user(
    db: Session = Depends(get_db),
    credentials: HTTPAuthorizationCredentials = Depends(security)
) -> User:
    """
    Dependency untuk mendapatkan current authenticated user

    Raises:
        HTTPException: Jika token invalid, expired, atau user tidak ditemukan

    Returns:
        User: Current authenticated user

    Usage:
        @app.get("/protected")
        def protected_route(user: User = Depends(get_current_user)):
            return {"user_id": user.id}
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        token = credentials.credentials

        # Decode JWT token
        payload = decode_token(token)
        if payload is None:
            raise credentials_exception

        # Get user_id from token
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception

    except JWTError:
        raise credentials_exception

    # Get user from database
    user = UserService.get_by_id(db, int(user_id))
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    return user


def get_current_active_user(
    current_user: User = Depends(get_current_user)
) -> User:
    """
    Dependency untuk mendapatkan current active user
    User harus active (is_active=True)

    Raises:
        HTTPException: Jika user inactive

    Returns:
        User: Current active user

    Usage:
        @app.get("/active-only")
        def active_route(user: User = Depends(get_current_active_user)):
            return {"message": "Active user access"}
    """
    if not current_user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Inactive user. Please contact administrator."
        )
    return current_user


def get_current_verified_user(
    current_user: User = Depends(get_current_active_user)
) -> User:
    """
    Dependency untuk mendapatkan current verified user
    User harus verified (is_verified=True)

    Raises:
        HTTPException: Jika user belum verified

    Returns:
        User: Current verified user

    Usage:
        @app.post("/start-interview")
        def start_interview(user: User = Depends(get_current_verified_user)):
            return {"message": "Interview started"}
    """
    if not current_user.is_verified:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Email not verified. Please verify your email first."
        )
    return current_user


def get_current_candidate(
    current_user: User = Depends(get_current_active_user)
) -> User:
    """
    Dependency untuk endpoint yang hanya bisa diakses oleh CANDIDATE

    Raises:
        HTTPException: Jika user bukan candidate

    Returns:
        User: Current user dengan role CANDIDATE

    Usage:
        @app.get("/my-interviews")
        def my_interviews(user: User = Depends(get_current_candidate)):
            return {"interviews": [...]}
    """
    if current_user.role != UserRole.CANDIDATE:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This endpoint is only accessible by candidates"
        )
    return current_user


def get_current_recruiter(
    current_user: User = Depends(get_current_active_user)
) -> User:
    """
    Dependency untuk endpoint yang hanya bisa diakses oleh RECRUITER

    Raises:
        HTTPException: Jika user bukan recruiter

    Returns:
        User: Current user dengan role RECRUITER

    Usage:
        @app.get("/candidate-list")
        def candidate_list(user: User = Depends(get_current_recruiter)):
            return {"candidates": [...]}
    """
    if current_user.role != UserRole.RECRUITER:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This endpoint is only accessible by recruiters"
        )
    return current_user


def get_current_admin(
    current_user: User = Depends(get_current_active_user)
) -> User:
    """
    Dependency untuk endpoint yang hanya bisa diakses oleh ADMIN

    Raises:
        HTTPException: Jika user bukan admin

    Returns:
        User: Current user dengan role ADMIN

    Usage:
        @app.get("/admin/users")
        def list_users(user: User = Depends(get_current_admin)):
            return {"users": [...]}
    """
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This endpoint is only accessible by administrators"
        )
    return current_user


def get_current_recruiter_or_admin(
    current_user: User = Depends(get_current_active_user)
) -> User:
    """
    Dependency untuk endpoint yang bisa diakses oleh RECRUITER atau ADMIN

    Raises:
        HTTPException: Jika user bukan recruiter atau admin

    Returns:
        User: Current user dengan role RECRUITER atau ADMIN

    Usage:
        @app.get("/interview-results")
        def interview_results(user: User = Depends(get_current_recruiter_or_admin)):
            return {"results": [...]}
    """
    if current_user.role not in [UserRole.RECRUITER, UserRole.ADMIN]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This endpoint is only accessible by recruiters or administrators"
        )
    return current_user


def get_current_user_optional(
    db: Session = Depends(get_db),
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(
        HTTPBearer(auto_error=False)
    )
) -> Optional[User]:
    """
    Dependency untuk mendapatkan user jika token ada, None jika tidak ada token
    Berguna untuk endpoint yang bisa diakses tanpa login, tapi ada fitur tambahan jika login

    Returns:
        Optional[User]: User jika authenticated, None jika tidak ada token

    Usage:
        @app.get("/public-content")
        def public_content(user: Optional[User] = Depends(get_current_user_optional)):
            if user:
                return {"message": "Logged in as", "user": user.email}
            return {"message": "Public access"}
    """
    if credentials is None:
        return None

    try:
        token = credentials.credentials
        payload = decode_token(token)

        if payload is None:
            return None

        user_id = payload.get("sub")
        if user_id is None:
            return None

        user = UserService.get_by_id(db, int(user_id))
        if user and user.is_active:
            return user

    except Exception:
        return None

    return None