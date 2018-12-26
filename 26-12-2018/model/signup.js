module.exports = {
    Request: function (req) {
        this.email = req.email;
        this.password = req.password;
        this.userType = req.userType;
    },
    Response: function (status) {
        this.status = status;
    }
};