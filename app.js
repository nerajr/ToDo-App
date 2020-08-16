var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//static files setup using express middleware
app.use(express.static('./public'));

//set up template engine
app.set('view engine', 'ejs');

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');

