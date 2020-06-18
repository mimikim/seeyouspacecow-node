let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();

// view engine setup
// utilize handlebars partials inside /views/
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// register handlebar partials
require('./includes/register-partials')();

// register helper functions
require('./includes/register-helpers');

// set up pages
app.use( require('./includes/routes') );

// set email endpoint
app.use( require('./includes/endpoint-email') );

// set portfolio endpoint
app.use( require('./includes/endpoint-portfolio') );

// set carousel endpoint
app.use( require('./includes/endpoint-carousel') );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // set locals
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);

  res.render( 'error', {
    title: 'Page Not Found!',
    description: 'See You Space Cow: The personal website and work portfolio for space cowboy and development engineer, Mimi Kim.',
    class: 'error',
    hasScript: true,
    hasStyle: true
  });
});

module.exports = app;
