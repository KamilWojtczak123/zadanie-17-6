var express = require('express');
var app = express();
app.use(express.static('assets'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.send('Hello world');
})


app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.send(JSON.stringify(response));
});

app.get('/index', function(req,res) {
    res.render('index');
});
        
app.get('/logged', function(req,res) {
   res.render('logged'); 
})

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});