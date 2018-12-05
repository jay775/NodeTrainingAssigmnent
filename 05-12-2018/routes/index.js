var express = require('express');
var router = express.Router();
const { db, employee } = require("../DB/db");
/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("request get");
  console.log(req);
  var id = req.param.id;
  if (id) {
    var emp = db.get(id);
    res.json(emp);
  }
  var employees = db.getAll();
  res.json(employees);
});

router.post("/", function (req, res, next) {
  var emp = new employee(req.body.name, req.body.phone);
  db.insert(emp);
  res.json(emp.id);
});

router.put("/", function (req, res, next) {
  var id = req.params.id;
  var emp = new employee(req.body.name, req.body.phone);
  db.update(id, emp);
  res.json({id:emp.id});
});

router.delete("/", function (req, res, next) {
  var id = req.params.id;
  db.delete(id);
  
  res.json({id:id});
});

module.exports = router;
