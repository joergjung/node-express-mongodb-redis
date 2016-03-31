var express = require('express');

var app = express();

app.get('/', function(req, res) {
//    res.send('Hello World!!'); 
   res.json({hello: 'hi'}); 
});

var server = app.listen(3000, function() {
    console.log("Server running at localhost:3000");    
})