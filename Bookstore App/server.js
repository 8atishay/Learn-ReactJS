var express = require('express');
var app = express();

app.use(express.static('public'));

var port = process.env.PORT || 5000;

app.listen(port,function(){
    console.log('Connected to port 5000');
})