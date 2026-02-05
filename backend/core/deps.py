from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from jose import jwt, JWTError

from backend.core.security import decode_token
from backend.db.session import get_db
from backend.services.user_service import UserService
from backend.model.user import User, UserRole
from backend.core.config import settings

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
    detail='Could not validate credentials',
    headers={"WWW-Authenticate": 'Bearer'},
  )

  try:
    token = credentials.credentials

    # Decode JWT Token
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

def get_curent_active_user(
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
      detail="Inactive user. Please contact administrator"
    )
  return current_user

def get_current_verified_user(
    current_user: User = Depends(get_curent_active_user)
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
    if not current_user.is_active:
      raise HTTPException(
        status_code=status.HTTP_403_FORBIDDEN,
        detail='Email not verified. Plase Verify your email first'
      )
    return current_user

def get_current_candidate(
    current_user: User = Depends(get_curent_active_user)
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
    current_user: User = Depends(get_curent_active_user)
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
