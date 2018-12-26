var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require("../Secret");
const loginModel = require('../model/login');
const { db } = require('../DB/db');
/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log("loginIn");
  var loginReq = new loginModel.Request(req.body);
  console.log(loginReq);
  db.getUserByEmailPass(loginReq.email, loginReq.password, function (user) {
    console.log(user);
    var loginRes = null;
    if (user == null) {
      loginRes = new loginModel.Response({ status: false, token: null });
    } else {
      var token = jwt.sign(JSON.stringify(user), config.JWTToken);
      loginRes = new loginModel.Response({ token: token, status: true });
    }
    console.log(loginRes);
    return res.json(loginRes);
  })
});

router.all('/', function (req, res, next) {
  res.sendStatus(404);
});
module.exports = router;
