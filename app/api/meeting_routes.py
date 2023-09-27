from flask import Blueprint, request
from ..models import db, Meeting, Location
from ..forms import MeetingForm
from .helpers import validation_errors_to_error_messages
from datetime import date, time

meeting_routes = Blueprint("meetings", __name__)


@meeting_routes.route("/all")
def get_all_meetings():
    """return all meetings"""
    response = [meeting.to_dict() for meeting in Meeting.query.all()]
    print(response)
    return { "meetings": response }


@meeting_routes.route("/new", methods=["POST"])
def create_new_meeting():
    form = MeetingForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        selected_location = Location.query.get(form.data["location_id"])
        print(selected_location)
        print(form.data["start_time"], form.data["end_time"])

        new_meeting = Meeting(
            name=form.data["name"],
            date= date(*[int(val) for val in form.data["date"].split("-")]),
            start_time=time(*[int(val) for val in form.data["start_time"].split(":")]),
            end_time=time(*[int(val) for val in form.data["end_time"].split(":")]),
            location = selected_location,
            details=form.data['details'],
            requirements=form.data['requirements'],
        )
        print(new_meeting)
        db.session.add(new_meeting)
        db.session.commit()
        response= new_meeting.to_dict()
        return {"newMeeting": response }

    else:
        print(form.errors)
        return { "errors": validation_errors_to_error_messages(form.errors) }