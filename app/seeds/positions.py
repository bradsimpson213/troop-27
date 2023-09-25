from app.models import db, Position, environment
from sqlalchemy.sql import text


def seed_positions():
    """seed function to create all scout ranks"""
    position_1 = Position(
        title="Senior Patrol Leader", 
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/2097735_orig-150x150.jpg",
    )
    position_2 = Position(
        title="Assistant Senior Patrol Leader",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/asst_senior_patrol_leader-150x150.jpg",
    )
    position_3 = Position(
        title="Patrol Leader",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/7128022-150x150.jpg",
    )
    position_4 = Position(
        title="Bugler",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2020/05/Bugler.png",
    )
    position_5 = Position(
        title="Troop Guide",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/9667493-150x150.jpg",
    )
    position_6 = Position(
        title="Quartermaster",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/1972386-150x150.jpg",
    )
    position_7 = Position(
        title="Troop Scribe",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/1330841-150x150.jpg",    
    )
    position_8 = Position(
        title="Troop Order of the Arrow Representative",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/04/oatrooprep-150x150.jpg",
    )
    position_9 = Position(
        title="Troop Historian",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/3631206-150x150.jpg",
    )
    position_10 = Position(
        title="Instructor",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/04/150px-Instructor.jpg",
    )
    position_11 = Position(
        title="Chaplain Aide",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/6370410-150x150.jpg",
    )
    position_12 = Position(
        title="Den Chief",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/04/150px-DenChiefPatch.jpg",
    )
    position_13 = Position(
        title="Webmaster",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/jl-webmaster-150x150.jpg",
    )
    position_14 = Position(
        title="Outdoor Ethics Guide",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/08/Outdor-Ethics-Guide-150x150.png",
    )
    position_15 = Position(
        title="Junior Assistant Scoutmaster",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/04/150px-JuniorAssistantScoutmasterPatch.jpg",
    )
    position_16 = Position(
        title="Scoutmaster",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/Scoutmaster-150x150.jpg"
    ) 
    position_17 = Position(
        title="Assistant Scoutmaster",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/Asst_scoutmaster-150x150.jpg",
    )
    position_18 = Position(
        title="Committee Chairman",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2020/08/Committee-Chair-e1596415620780.jpg"
    )
    position_19 = Position(
        title="Committee Member",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/patch_troopmc.jpg",
    )
    position_20 = Position(
        title="Charter Organization Representative",
        image_url="https://troopleader.scouting.org/wp-content/uploads/sites/5/2016/03/CharteredOrganizationRep-150x150.gif",
    )

    all_positions = [position_1, position_2, position_3, position_4, position_5,
            position_6, position_7, position_8, position_9, position_10, position_11,
            position_12, position_13, position_14, position_15, position_16, position_17,
            position_18, position_19, position_20]
    _ = [db.session.add(position) for position in all_positions]
    db.session.commit()
    return all_positions


def undo_positions():
    """undo scout rank seeds"""
    if environment == "production":
        db.session.execute(f"TRUNCATE table positions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM positions"))
        
    db.session.commit()
