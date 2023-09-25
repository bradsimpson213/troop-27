from .db import db


class LeaderProfile(db.Model):
    __tablename__ = "leader_profiles"

    id = db.Column(db.Integer, primary_key=True)
    phone = db.Column(db.String(20), nullable=False)
    bsa_id = db.Column(db.Integer, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    position_id = db.Column(db.Integer, db.ForeignKey("positions.id"), nullable=False)

    # relationship attributes
    position = db.relationship("Position", back_populates="leader_positions")   
    user_profile = db.relationship("User", back_populates="leader_profile", uselist=False)