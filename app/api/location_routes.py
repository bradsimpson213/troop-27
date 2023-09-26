from flask import Blueprint
from ..models import Location

location_routes = Blueprint("locations", __name__)


@location_routes.route("/all")
def get_all_meetings():
    response = [location.to_dict() for location in Location.query.all()]
    print(response)
    return { "locations": response }