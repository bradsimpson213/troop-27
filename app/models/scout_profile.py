from .db import db


class ScoutProfile(db.Model):
    pass



class RankEnum(enum.Enum):
    scout = "Scout"
    tenderfoot = "Tenderfoot"
    second_class = "Second class"
    first_class = "First class"
    star = "Star"
    life = "Life"
    eagle = "Eagle"