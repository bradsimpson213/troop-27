from .db import db


class Position(db.Model):
    __tablename__ = "positions"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)

    # relationship attributes
    leader_positions = db.relationship("LeaderProfile", back_populates="position")
    scout_positions = db.relationship("ScoutProfile", back_populates="position")
