var express = require('express');
var consign = require('consign');
var bP = require('body-Parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bP.urlencoded({extended : true}));

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app);

module.exports = app;