var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var async = require('async');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// pass app as a function parameter
var petRoutes = require('./routes/pet.js')(app);

var server = app.listen(3002, function() {
    console.log("Server running at localhost:3002");    
});
