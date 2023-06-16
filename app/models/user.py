from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
import enum


class RoleEnum(enum.Enum):
    leader = "leader"
    scout = "scout"
    parent = "parent"


class RankEnum(enum.Enum):
    scout = "scout"
    tenderfoot = "tenderfoot"
    second_class = "second class"
    first_class = "first class"
    star = "star"
    life = "life"
    eagle = "eagle"
    leader = "leader"
    parent = "parent"


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.String(255), nullable=False)
    profile_pic = db.Column(db.String(255), nullable=False)
    birthdate = db.Column(db.Date, nullable=False)
    admin = db.Column(db.Boolean, default=False)
    role = db.Column(db.Enum(RankEnum), nullable=False)
    rank = db.Column(db.Enum(RoleEnum), nullable=False)
    position_id = db.Column(db.Integer, db.ForeignKey("positions.id"))
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow)

    # relationship attributes
    position = db.relationship("Position", back_populates="user_positions")


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
