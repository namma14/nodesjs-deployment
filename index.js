var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('{"response":"Hello from Nachiketa"}');
});

app.get('/will', function(req, res){
    res.send('{"response": "Hello from will page Nachiketa"}')
}
);
app.get("/ready", function(req, res) {
    res.send('{"response":"alls looking great Nachiketa"}')
}
);
app.listen(process.env.PORT || 3000);
module.exports = app;