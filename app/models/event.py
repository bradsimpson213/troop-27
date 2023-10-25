from .db import db
from datetime import datetime


# note will need to add fields for paypal payments

class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_data = db.Column(db.Date, nullable=False)
    start_time = db.Column(db.Time, nullable=False)
    end_time = db.Column(db.Time, nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.id"), nullable=False)
    details = db.Column(db.String(255), nullable=False)
    requirements = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Integer)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow)


    location = db.relationship(
        "Location",
        back_populates="events"
    )

    # need to convert this to work with events

    # @classmethod  
    # def fancy_sort_meetings(cls, meetings):
    #     meeting_dict = {}
    #     for meeting in meetings:
    #         convert_month = meeting.date.strftime("%B")
    #         convert_year = meeting.date.strftime("%Y")
    #         test_key = f"{convert_year} - {convert_month}"
    #         if test_key not in meeting_dict:
    #             meeting_dict[test_key] = [meeting.to_dict()]
    #         else:
    #             meeting_dict[test_key].append(meeting.to_dict())

    #     return meeting_dict


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "start_date": self.start_date.isoformat(),
            "end_data": self.end_date.isoformat(),
            "start_time": self.start_time.isoformat(),
            "end_time": self.end_time.isoformat(),
            "location": self.location.to_dict(),
            "details": self.details,
            "requirements": self.requirements,
        }