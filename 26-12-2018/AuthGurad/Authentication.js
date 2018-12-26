var jwt = require('jsonwebtoken');
var secret = require('../Secret');
var { db } = require('../DB/db');

var verifyToken = function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, secret.JWTToken, function (err, user) {
            if (err)
                return res.sendStatus(403);

            req.user = user;
            next();
        })
    }
    else {
        return res.sendStatus(403);
    }
}

var verifyRole = function (req, res, next) {
    var user = req.user;
    if (user.type != "admin")
        return res.sendStatus(403);

    next();
}

module.exports = {
    verifyToken: verifyToken,
    verifyRole: verifyRole
};