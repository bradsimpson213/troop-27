from .db import db


class Meeting(db.Model):
    __tablename__ = 'meetings'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    time = db.Column(db.String(10), nullable=False)
    date = db.Column(db.String(20), nullable=False)
    location = db.Column(db.String(20), nullable=False)
    details = db.Column(db.String(255), nullable=False)
    requirements = db.Column(db.String(255), nullable=False)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow)