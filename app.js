var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
var Barbeque = require('./models/barbequeSchema');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var BarbequeRouter = require('./routes/Barbeque');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Barbeque', BarbequeRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Barbeque.deleteMany();
  let instance1 = new Barbeque(
    { Order_name: "Grilled Chicken", Order_quantity: '3', Order_price: 40 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First database created")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }




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