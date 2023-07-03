from .db import db
import enum


class RankEnum(enum.Enum):
    scout = "Scout"
    tenderfoot = "Tenderfoot"
    second_class = "Second Class"
    first_class = "First Class"
    star = "Star"
    life = "Life"
    eagle = "Eagle"


class ScoutProfile(db.Model):
    __tablename__ = "scout_profiles"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    position_id = db.Column(db.Integer, db.ForeignKey("positions.id"), nullable=False)
    rank = db.Column(db.Enum(RankEnum), nullable=False)
       # relationship attributes
    position = db.relationship("Positions", back_populates="scout_positions")   
