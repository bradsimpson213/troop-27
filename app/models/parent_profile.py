from .db import db



class ParentProfile(db.Model):
    __tablename__ = "parent_profiles"

    id = db.Column(db.Integer, primary_key=True)
    phone = db.Column(db.String(20), nullable=False)

    # relationship attributes
    user_profile = db.relationship("User", back_populates="parent_profile")