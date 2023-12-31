var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var otoRouter = require('./routes/oto');
var bupbeRouter = require('./routes/bupbe');

var app = express();
var mongoose = require('mongoose');
var uri = "mongodb+srv://danglhgch210719:lehongdang@webfigure.zdamyua.mongodb.net/gch1107";
mongoose.connect(uri)
    .then(() => console.log('ok'))
    .catch((err) => console.log('fail'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/oto", otoRouter);
app.use("/bupbe", bupbeRouter);

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
var port = process.env.PORT || 4420;
app.listen(port);

module.exports = app;