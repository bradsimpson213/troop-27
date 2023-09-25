from app.models import db,  environment, MeritBadge
from sqlalchemy.sql import text


def seed_merit_badges():
    """seed function to create all merit badges"""

    merit_badge_1 = MeritBadge(
        name= "American Business",
        description = "Earning the American Business Merit Badge can help Scouts learn practical business matters that will be useful throughout life. Learning how businesses function will help you understand society and uncover a number of career options.",
        eagle_required=False,
        logo = "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://www.scouting.org/wp-content/uploads/elementor/thumbs/AmericanBusiness-1-pz455z7kk7d1chl0x12ragbo4b3aafu8sbrnxub61s.png"
    )

    merit_badge_2 = MeritBadge(
        name= "American Cultures",
        description = "The United States is a nation of immigrants. Every person came to America from somewhere else—or their ancestors did—and understanding these various cultural backgrounds can help Scouts to live in harmony with others in our varied and increasingly multicultural society.",
        eagle_required=False,
        logo = "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://www.scouting.org/wp-content/uploads/elementor/thumbs/AmericanCultures-pzg63sfesv5vkybmq2z7dfex52ly6ifjmxjup92lb4.png"
    )

    merit_badge_3 = MeritBadge(
        name= "",
        description = "",
        eagle_required=False,
        logo = ""
    )


def undo_merit_badges():
    """undo merit_badge seeds"""
    if environment == "production":
        db.session.execute(f"TRUNCATE table merit_badges RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM merit_badges"))
        
    db.session.commit()
