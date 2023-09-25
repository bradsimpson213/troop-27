from flask import Blueprint
from .models import Meeting

meeting_routes = Blueprint("meetings", __name__)


@meeting_routes.route("/all")
def get_all_meetings():
    response = [meeting.to_dict() for meeting in Meeting.query.all()]
    print(response)
    return { "meetings": response }