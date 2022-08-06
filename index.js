const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app 
const app = express();

// connect to mongodb
mongoose.connect('mongodb://twig-budgeting:pass1234@localhost:27017/friendgo');
mongoose.Promise = global.Promise;

// set up json request body parser
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));


// listen for request
app.listen(process.env.port || 4000, () => 
    console.log('now listening for requests')
);;