from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from backend.core.security import decode_token
from backend.db.session import get_db
from backend.services.user_service import UserService
from backend.model.user import User