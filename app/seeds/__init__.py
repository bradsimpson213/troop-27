from flask.cli import AppGroup
from .users import seed_users, undo_users
from .positions import seed_positions, undo_positions
from .locations import seed_locations, undo_locations
import os


environment = os.getenv("FLASK_ENV")
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables 
        undo_users()
        undo_locations()
        undo_positions()

    seed_positions()
    seed_locations()
    seed_users()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_locations()
    undo_positions()
    # Add other undo functions here
