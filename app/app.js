var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');

var indexRouter = require('./routes/index');
var portfolioRouter = require('./routes/portfolio');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var blogRouter = require('./routes/blog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

var hbs = require('hbs');
hbs.registerPartial( 'head', fs.readFileSync(path.join(__dirname, './views/head.hbs'), 'utf8') );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/index.html', indexRouter);
app.use('/index.php', indexRouter);

app.use('/portfolio', portfolioRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/blog', blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;