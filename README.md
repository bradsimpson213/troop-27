# TROUP 27 Website


Live site at:  https://troop-27.herokuapp.com/


## Completed Features
- User authentication 

## In Development Features
- Meetings
- Public landing page (will show next meeting)

## Future Features List
- Feed with multiple post types (aka instagram or tumblr)
   - Meeting Posts - reminder reposting!  (workers for flask?)
   - Upcoming Events Posts (with payment link included if needed)
   - Past Event Posts 
- Next meeting reminders
- Scoutmasters Corner (static resource)
- Eagle scout listing
- AWS S3 integration for images
- Paypal integration (https://developer.paypal.com/api/nvp-soap/paypal-payments-standard/integration-guide/pps-integration/)
- Comments on all post types
   - comments can have an image too
- Maybe post likes
- User profile pages
- Leaders page for roster info and parent info
- Payments tracking for paypal paid events (on parent users)
- Leaders resources page (for helpful links and files)
- Eventual email blast abilities?
- Maybe SMS reminders and alerts too?



## Technologies

Python - Flask / JavasScript - React / Postgresql Stack
Boto3 Library for AWS S3 Integration
Material UI Component Library


### NOTES

Heroku seedings command `heroku run -a HEROKU_APP_NAME flask seed all`
react paypal package https://www.npmjs.com/package/@paypal/react-paypal-js
react paypal implementation video https://www.youtube.com/watch?v=sa9XtaKcSvo
