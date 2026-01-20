from pydantic import BaseModel, EmailStr, Field, validator
from typing import Optional
from datetime import datetime
from backend.model.user import UserRole

# Base User Schema
class UserBase(BaseModel):
  email: EmailStr
  full_name: str = Field(..., min_length=3, max_length=255)
  role: UserRole = UserRole.CANDIDATE

# Schema untuk Create User (Register)
class UserCreate(UserBase):
  password: str = Field(..., min_length=8, max_length=100)
  confirm_password: str = Field(..., min_length=8, max_length=100)
  company: Optional[str] = Field(None, max_length=255)

  @validator('confirm_password')
  def password_match(cls, v, values):
    if 'password' in values and v != values['password']:
      raise ValueError("Password do not match")
    return v

  @validator('company')
  def validate_company(cls, v, values):
    if 'role' in values and values['role'] == UserRole.RECRUITER and not v:
      raise ValueError('Company is required for recruiters')
    return v

# Schema untuk update User
class UserUpdate(BaseModel):
  full_name: Optional[str] = Field(None, min_length=3, max_length=255)
  company: Optional[str] = Field(None, max_length=255)

  class Config:
    from_attributes = True

# Schema untuk Response
class UserResponse(UserBase):
  id: int
  company: Optional[str]
  is_active: bool
  is_verified: bool
  created_at: datetime
  last_login: Optional[datetime]

  class Config:
    from_attributes = True

# Schema untuk Login
class UserLogin(BaseModel):
  email: EmailStr
  password: str
  remember_me: bool = False

# Schema untuk Token Payload
class PasswordChange(BaseModel):
  current_password: str
  new_password: str = Field(..., min_length=8, max_length=100)
  confirm_password: str = Field(..., min_length=8, max_length=100)

  @validator('confirm_password')
  def password_match(cls, v, values):
    if 'new_password' in values and v != values['new_password']:
      raise ValueError('Password do not match')
    return v