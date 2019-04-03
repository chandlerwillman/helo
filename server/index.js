//require packages
const express = require('express');
const bodyParser = require('body-parser');
const massive =require('massive');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

//controllers
const controller = require('./controller');

//deconstructed variables
const { DB_CONNECTION_STRING } = process.env;

//middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

//database connection
massive(DB_CONNECTION_STRING, { scripts: __dirname + 'db' })
  .then((dbInstance) => {
        app.set('db',dbInstance);
}).catch((error) => {
    console.log('failed:', error);
});

//endpoints

//get server listening on a port
app.listen(4005, () => {
    console.log('Server is running on localhost:4005')
});