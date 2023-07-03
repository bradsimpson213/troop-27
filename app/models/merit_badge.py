from .db import db


merit_badge_owners = db.Table(
    "merit_badge_owners",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("badge_id", db.Integer, db.ForeignKey("meritbadge.id"), primary_key=True),

)


class MeritBadge(db.Model):
    __tablename__ = 'meritbadge'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    description = db.Column(db.String(1000), nullable=False)
    eagle_required = db.Column(db.Boolean, default=False)
    logo = db.Column(db.String(150), nullable=False)

    # relationship attributes
    badge_owners = db.relationship(
        "User",
        secondary = merit_badge_owners,
        back_populates="badges",
    )