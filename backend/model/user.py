from sqlalchemy import Boolean, Column, Integer, String, DateTime, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from backend.db.session import Base

class UserRole(str, enum.Enum):
  CANDIDATE = "candidate"
  RECRUITER = "recruiter"
  ADMIN = 'admin'

class User(Base):
  __tablename__ = "users"

  id = Column(Integer, primary_key=True, index=True)
  email = Column(String(255), unique=True, index=True, nullable=False)
  full_name = Column(String(255), nullable=False)
  hashed_password = Column(String(255), nullable=False)
  role = Column(Enum(UserRole), nullable=False, default=UserRole.CANDIDATE)
  company = Column(String(255), nullable=True) # For Recruiters

  is_active = Column(Boolean, default=True)
  is_verified = Column(Boolean, default=False)

  created_at = Column(DateTime, default=datetime.utcnow)
  updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
  last_login = Column(DateTime, nullable=True)

  # RelationShip
  # Interviews = relationship("Interview", back_populates="user")
  # results = relationship("InterviewResult", back_populates="user")

  def __repr__(self):
    return f"<User(id={self.id}, email={self.email}, role={self.role})>"