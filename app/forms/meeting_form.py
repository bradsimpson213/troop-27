from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class MeetingForm(FlaskForm):
    name = StringField("name", validators=[DataRequired(), Length(min=5, max=150)])
    date = StringField("date", validators=[DataRequired()])
    start_time = StringField("start_date", validators=[DataRequired()])
    end_time = StringField("end_date", validators=[DataRequired()])
    location_id = IntegerField("location_id", validators=[DataRequired()])
    details = StringField("date", validators=[DataRequired(), Length(max=255)])
    requirements = StringField("date", validators=[DataRequired(), Length(max=255)])
