from .db import db


class LeaderProfile(db.Model):
    __tablename__ = "leader_profiles"

    id = db.Column(db.Integer, primary_key=True)
    
