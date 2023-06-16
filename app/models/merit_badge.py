from .db import db


class MeritBadge(db.Model):
    __tablename__ = 'meritbadge'

    id = db.Column(db.Integer, primary_key=True)
    badge_name = db.Column(db.String(50), nullable=False, unique=True)
    eagle_required = db.Column(db.Boolean, default=False)
    logo = db.Column(db.String(150), nullable=False)