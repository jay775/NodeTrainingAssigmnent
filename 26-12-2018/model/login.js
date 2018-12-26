module.exports = {
    Request: function(req){
        this.email = req.email;
        this.password = req.password;
    },
    Response:function(resp){
        this.token = resp.token;
        this.status = resp.status;
    }

};