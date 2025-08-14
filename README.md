 Ecommerce Backend API

This is a simple backend I built for an ecommerce app using Node.js, Express.js, and MongoDB.
It allows users to register, log in, and create posts/products.

How I Built It (In Simple Terms)

Set up the project

Created a folder and opened it in VS Code

Ran npm init -y to start a Node.js project

Installed important packages like:

express → for building the server

mongoose → to connect to MongoDB

dotenv → to hide sensitive info like database passwords

nodemon → to restart the server automatically during development

Connected to MongoDB

Created a free MongoDB Atlas account

Made a database and got my connection string

Stored it inside .env so it’s not public

Used mongoose.connect() in my code to link the app to the database

Created API routes

Auth Routes → For user signup and login

Post Routes → For creating and getting posts/products

Tested with Postman

Wrote different sample data (JSON format)

Sent requests to my routes to see if they work

Fixed errors along the way

“Bad Auth” → I corrected my MongoDB username/password in .env

“req.body undefined” → I used express.json() middleware to read JSON data

Final Touch

Organized the code into routes, controllers, and models folders

Added clear responses so Postman shows success or error messages