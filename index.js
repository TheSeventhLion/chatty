var bodyParser = require('body-parser');
var express = require('express');


var app = express();

app.use(express.static('assets'))
app.use(bodyParser.json())

//This is acting as a temp storage, but is usually not involved in full scales apps // 
var messages = [];
//This is acting as a temp storage, but is usually not involved in full scales apps // 

console.log(app)

app.get('/messages', function(req, res, next) {
    res.status(200).json({ messages: messages });
});

app.post('/messages', function(req, res, next) {
    messages.push(req.body);
    res.status(200).json({ messages: messages });
});













//This always be the very last thing in your index.js file


app.listen(3000, function() {
    console.log('Listening on Port 3000')
});