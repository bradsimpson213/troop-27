from .db import db


class ScoutProfile(db.Model):
    __tablename__ = "scout_profiles"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    position_id = db.Column(db.Integer, db.ForeignKey("positions.id"), nullable=False)




class RankEnum(enum.Enum):
    scout = "Scout"
    tenderfoot = "Tenderfoot"
    second_class = "Second class"
    first_class = "First class"
    star = "Star"
    life = "Life"
    eagle = "Eagle"