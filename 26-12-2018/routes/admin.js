var express = require('express');
var router = express.Router();

router.all('/', function (req, res, next) {
    return res.json({ "message": "Welcome to admin Page" });
});

module.exports = router;