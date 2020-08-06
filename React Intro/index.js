var express = require('express');
var app = express();

// app.get('/',function(req,res){
//     res.sendfile(__dirname+"/Public/index.html");
// })
app.use(express.static('public'));

app.listen(5000,function(){
    console.log('Connected to port 5000');
})