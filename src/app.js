const path = require('path');

const express = require('express');
const loger = require('morgan');
//peticiones post
const bodyParser = require('body-parser');

const app = express();

const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//midlewares se ejecutan peticiones 
app.use(loger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});