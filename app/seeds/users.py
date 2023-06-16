from app.models import db, User, environment
from datetime import date
from sqlalchemy.sql import text



def seed_users(all_positions):
    user1 = User(
        username="BradSimpson", 
        email="bradsimpson@icloud.com",
        password="Konadog4$",
        bio="I love scouting",
        profile_pic="https://ca.slack-edge.com/T03GU501J-USQFVK3GT-947b84c598b8-512",
        birthdate=date(1978,2,13),
        admin=True,
        role="leader",
        rank="leader",
        position=all_positions[-4]
    )

    db.session.add(user1)
    db.session.commit()



def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()
