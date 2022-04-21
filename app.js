var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
mongoose = require('mongoose');
var Barbeque = require('./models/Barbeque');
const connectionString = process.env.MONGO_CON

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var BarbequeRouter = require('./routes/Barbeque');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');


mongoose.connect('mongodb+srv://Chooseyourconnection:padma@cluster0.2h8dj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var app = express();
// view engine setup
app.set('views', path.join(__dirorder_name, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirorder_name, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Barbeque', BarbequeRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Barbeque.deleteMany();
  let instance1 = new Barbeque(
    { order_name: "Chicken", order_quantity: '2', order_price: 60 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });

  let instance2 = new Barbeque(
    { order_name: "Fish", order_quantity: '7', order_price: 80 });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });

  let instance3 = new Barbeque(
    { order_name: "Prawns", order_quantity: '4', order_price: 40 });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.messorder_quantity = err.messorder_quantity;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error porder_quantity
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
module.exports = app;
