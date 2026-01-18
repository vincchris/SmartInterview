from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from backend.core.config import settings

# Create Database Engine
engine = create_engine(
  settings.DATABASE_URL,
)

# Create Session Factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create base class for models
Base = declarative_base()

# Depedency for Get Database Session
def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()