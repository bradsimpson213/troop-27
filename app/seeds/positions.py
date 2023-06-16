from app.models import db, Position, environment
from sqlalchemy.sql import text


def seed_positions():
    position_1 = Position(title="Senior Patrol Leader")
    position_2 = Position(title="Assistant Senior Patrol Leader")
    position_3 = Position(title="Patrol Leader")
    position_4 = Position(title="Bugler")
    position_5 = Position(title="Troop Guide")
    position_6 = Position(title="Quartermaster")
    position_7 = Position(title="Troop Scribe")
    position_8 = Position(title="Troop Order of the Arrow Representative")
    position_9 = Position(title="Troop Historian")
    position_10 = Position(title="Instructor")
    position_11 = Position(title="Chaplain Aide")
    position_12 = Position(title="Den Chief")
    position_13 = Position(title="Webmaster")
    position_14 = Position(title="Webelos Deb Chief")
    position_15 = Position(title="Outdoor Ethics Guide")
    position_16 = Position(title="Junior Assistant Scoutmaster")
    position_17 = Position(title="Scoutmaster") 
    position_18 = Position(title="Assistant Scoutmaster")
    position_19 = Position(title="Committee Chairman")
    position_20 = Position(title="Committee Member")
    position_21 = Position(title="Charter Organization Representative")

    all_positions = [position_1, position_2, position_3, position_4, position_5,
            position_6, position_7, position_8, position_9, position_10, position_11,
            position_12, position_13, position_14, position_15, position_16, position_17,
            position_18, position_19, position_20, position_21]
    _ = [db.session.add(position) for position in all_positions]
    db.session.commit()
    return all_positions


def undo_positions():
    if environment == "production":
        db.session.execute(f"TRUNCATE table positions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM positions"))
        
    db.session.commit()
