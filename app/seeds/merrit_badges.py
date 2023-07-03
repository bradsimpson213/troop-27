from app.models import db,  environment
from sqlalchemy.sql import text


def seed_merit_badges():
    """seed function to create all merit badges"""
    


def undo_positions():
    """undo merit_badge seeds"""
    if environment == "production":
        db.session.execute(f"TRUNCATE table merit_badges RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM merit_badges"))
        
    db.session.commit()
