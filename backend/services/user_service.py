from sqlalchemy.orm import Session
from typing import Optional
from datetime import datetime
from backend.model.user import User
from backend.schemas.user import UserCreate, UserUpdate
from backend.core.security import get_password_hash, verify_password

class UserService:

  @staticmethod
  def get_by_email(db: Session, email: str) -> Optional[User]:
    """Get user by email"""
    return db.query(User).filter(User.email == email).first()

  @staticmethod
  def get_by_id(db: Session, user_id: int) -> Optional[User]:
    """Get user by 10"""
    return db.query(User).filter(User.id == user_id).first()

  @staticmethod
  def create(db: Session, user_in: UserCreate) -> User:
    """Create new user"""
    db_user = User(
      email=user_in.email,
      full_name=user_in.full_name,
      hashed_password=get_password_hash(user_in.password),
      role=user_in.role,
      company=user_in.company if user_in.role.value == "recruiter" else None
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

  @staticmethod
  def update(db: Session, user_id: int, user_in: UserUpdate) -> Optional[User]:
    """Update User"""
    db_user = UserService.get_by_id(db, user_id)
    if not db_user:
      return None

    update_data = user_in.dict(exclude_unset=True)
    for field, value in update_data.items():
      setattr(db_user, field, value)

    db.commit()
    db.refresh(db_user)
    return db_user

  @staticmethod
  def authenticate(db: Session, email: str, password: str) -> Optional[User]:
    """Authenticate User"""
    user = UserService.get_by_email(db, email)
    if not user:
      return None
    if not verify_password(password, user.hashed_password):
      return None
    if not user.is_active:
      return None

    # Update Last Login
    user.last_login = datetime.utcnow()
    db.commit()

    return user

  @staticmethod
  def change_password(
    db: Session,
    user_id: int,
    current_password: str,
    new_password: str
  ) -> bool:
    """Change user password"""
    user = UserService.get_by_id(db, user_id)
    if not user:
      return False

    if not verify_password(current_password, user.hashed_password):
      return False

    user.hashed_password = get_password_hash(new_password)
    db.commit()
    return True

  @staticmethod
  def deactive(db: Session, user_id: int) -> bool:
    """Deactive User"""
    user = UserService.get_by_id(db, user_id)
    if not user:
      return False

    user.is_active = False
    db.commit()
    return True

  @staticmethod
  def verivy_email(db: Session, user_id: int) -> bool:
    """Verify user email"""
    user = UserService.get_by_id(db, user_id)
    if not user:
      return False

    user.is_active = True
    db.commit()
    return False