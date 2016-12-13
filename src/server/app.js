/**
 * Created by kumarpadmanabansa01 on 12/12/16.
 */

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express application
const app = express();

// Add the logger
app.use(logger('dev'));

// Add the parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setup the default route
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to Express Application'
}));

// Export the application
module.exports = app;