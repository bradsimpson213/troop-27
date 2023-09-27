from .db import db
from datetime import datetime


class Meeting(db.Model):
    __tablename__ = 'meetings'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    date = db.Column(db.Date, nullable=False)
    start_time = db.Column(db.Time, nullable=False)
    end_time = db.Column(db.Time, nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.id"), nullable=False)
    details = db.Column(db.String(255), nullable=False)
    requirements = db.Column(db.String(255), nullable=False)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow)

    location = db.relationship(
        "Location",
        back_populates="meetings"
    )



    @classmethod  
    def fancy_sort_meetings(cls, meetings):
        pass

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "date": self.date,
            "start_time": self.start_time,
            "end_time": self.end_time,
            "location": self.location,
            "details": self.details,
            "requirements": self.requirements,
        }

    