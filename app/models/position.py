from .db import db


class Position(db.Model):
    __tablename__ = "positions"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)

    # relationship attributes
    user_positions = db.relationship("User", back_populates="position")
