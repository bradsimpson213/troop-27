from app.models import db, Location, environment
from sqlalchemy.sql import text



def seed_locations():
    location1 = Location(
        name = "Holmes Building",
        street_address = "180 Rodney Street",
        city = "Glen Rock",
        state = "NJ",
        zip_code = "07452",
        phone = "201-445-0622",
        notes = "Regular troop meeting location",
    )

    location2 = Location(
        name = "Camp No-Be-Bo-Sco",
        street_address = "11 Sand Pond Road",
        city = "Hardwick Township",
        state = "NJ",
        zip_code = "07452",
        phone = "908-362-6088",
        notes = "NOBE!!!",
    )

    location3 = Location(
        name = "Camp Turrell Boy Scouts",
        street_address = "144 Galligan Rd",
        city = "Cuddebackville",
        state = "NY",
        zip_code = "12729",
        phone = "845-754-7111",
        notes = "The road in is not gentle...",
    )

    all_locations = [location1, location2, location3]
    _ = [db.session.add(location) for location in all_locations]
    db.session.commit()



def undo_locations():
    if environment == "production":
        db.session.execute(f"TRUNCATE table locations RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM locations"))
        
    db.session.commit()