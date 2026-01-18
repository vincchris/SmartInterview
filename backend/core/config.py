from pydantic_settings import BaseSettings
from typing import List
import os

class Settings(BaseSettings):
  # Project Info
  PROJECT_NAME: str = "Smart Interview API"
  VERSION: str = '1.0.0'
  API_V1_STR: str = '/api/v1'
  DEBUG: bool = True

  # Database
  DATABASE_URL: str = "mysql:///./smart_interview.db"

  # Security
  SECRET_KEY: str = 'production'
  ALGORITM: str = "HS256"
  ACCESS_TOKEN_EXPIRED_MINUTES: int = 30
  REFRESH_TOKEN_EXPIRED_DAYS: int = 7

  # CORS
  BACKEND_CORS_ORIGINS: List[str] = [
    "http://localhost:3000",
    "http://localhost:3001"
  ]

  class Config:
    env_file = ".env"
    case_sensitive = True

settings = Settings()