from flask import Blueprint
from ..models import Location

location_routes = Blueprint("locations", __name__)


@location_routes.route("/all")
def get_all_locations():
    """returns all locations to send to the front end"""
    response = [location.to_dict() for location in Location.query.all()]
    return { "locations": response }