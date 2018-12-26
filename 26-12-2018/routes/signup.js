var express = require('express');
var router = express.Router();
const singupModel = require('../model/signup');
const { employee, db } = require('../DB/db');
/* GET users listing. */
router.post('/', function (req, res, next) {
  var content = req.body;
  var singupModelReq = new singupModel.Request(content);
  var emp = new employee(singupModelReq);
  db.insert(emp, function (user) {
    var status = false;
    if (user)
      status = true;
    var signupResModel = new singupModel.Response(status);
    return res.json(signupResModel);
  });
});

router.all('/*', function (req, res, next) {
  res.sendStatus(404);
});

module.exports = router;
