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
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    position_id = db.Column(db.Integer, db.ForeignKey("positions.id"), nullable=False)
    rank = db.Column(db.Enum(RankEnum), nullable=False)
       # relationship attributes
    position = db.relationship("Position", back_populates="scout_positions")   
    user_profile = db.relationship("User", back_populates="scout_profile", uselist=False)