from .db import db
from .merit_badge import merit_badge_owners
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
import enum



class RoleEnum(enum.Enum):
    leader = "leader"
    scout = "scout"
    parent = "parent"


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(35), nullable=False)
    last_name = db.Column(db.String(45), nullable=False)
    preferred_name = db.Column(db.String(50), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.String(255), nullable=False)
    profile_pic = db.Column(db.String(255), nullable=False)
    birthdate = db.Column(db.Date, nullable=False)
    admin = db.Column(db.Boolean, default=False)
    role = db.Column(db.Enum(RoleEnum), nullable=False)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow)

    # relationship attributes
    badges = db.relationship(
        "MeritBadge",
        secondary=merit_badge_owners,
        back_populates="badge_owners",
    ) 
    


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self, print_it=False):
        return_dict = {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
        if print_it is True: 
            print(return_dict)
        return return_dict