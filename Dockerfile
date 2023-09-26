FROM python:3.9

ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV REACT_APP_BASE_URL=https://troop-27.herokuapp.com/

WORKDIR /var/www

COPY . .

COPY /react-app/build/* app/static/

RUN pip install -r requirements.txt
RUN pip install psycopg2

CMD gunicorn app:app