from .db import db


class Location(db.Model):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key=True )
    name = db.Column(db.String(150), nullable=False)
    street_address = db.Column(db.String(150), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(5), nullable=False)
    zip_code = db.Column(db.String(10), nullable=False)
    phone = db.Column(db.String(15), nullable=False)
    notes = db.Column(db.String(1000), nullable=False)

    meetings = db.relationship(
        "Meeting",
        back_populates="location"
    )