from app.models import db, Location, environment
from sqlalchemy.sql import text



def seed_locations():
    location1 = Location(
        name = "Holmes Building",
        street_address = "180 Rodney Street",
        city = "Glen Rock",
        state = "NJ",
        zip_code = "07452",
        location_image= "https://lh3.googleusercontent.com/p/AF1QipMr7VT5npobu1CVMHAOBqorS8KoHDVRW0YP750-=s680-w680-h510",
        phone = "201-445-0622",
        notes = "Regular troop meeting location",
    )

    location2 = Location(
        name = "Camp No-Be-Bo-Sco",
        street_address = "11 Sand Pond Road",
        city = "Hardwick Township",
        state = "NJ",
        zip_code = "07452",
        location_image= "https://img.atlasobscura.com/okOoPMMO4EXfr4SBjf9Q5odXJyhYDlR6PGpyXSMC7DI/rt:fit/h:390/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8zMGJi/ZmM3MC1jYmY0LTQ1/OTAtYjJmNy00MGQ4/MjAzN2VkN2RjYzE5/OWEyZGVlYTlmMWYy/MGFfSU1HLTQ4ODku/SlBH.jpg",
        phone = "908-362-6088",
        notes = "NOBE!!!",
    )

    location3 = Location(
        name = "Camp Turrell Boy Scouts",
        street_address = "144 Galligan Rd",
        city = "Cuddebackville",
        state = "NY",
        zip_code = "12729",
        location_image= "https://www.facebook.com/photo/?fbid=202288942319182&set=a.202288915652518&__tn__=%3C",
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