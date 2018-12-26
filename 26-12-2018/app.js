var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var authGurad = require('./AuthGurad/Authentication');
var employeeRouter = require('./routes/employee');
var adminRouter = require('./routes/admin');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use(authGurad.verifyToken);

app.use('/emp', employeeRouter);

app.use(authGurad.verifyRole);

app.use('/admin', adminRouter);

module.exports = app;
