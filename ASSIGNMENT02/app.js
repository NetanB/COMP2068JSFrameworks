var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var flightRouter = require('./routes/flights');
var bookingRouter = require('./routes/bookings');
var airlineRouter = require('./routes/airlines');
var app = express();

//libs
var config = require('./config/globals');
var mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use("/", express.static("./node_modules/bootstrap/dist/"));
app.use(
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/"))
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/flights', flightRouter);
app.use('/bookings', bookingRouter);
app.use('/airlines', airlineRouter);


//config mongoose
mongoose
.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true})
.then((message)=>{
  console.log('connected Successfully!')
})
.catch((err) =>{
  console.log('error while connecting')
});

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
