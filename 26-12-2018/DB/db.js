var employeeID = 0;

function Employee(input) {
    this.id = 0;
    this.email = input.email;
    this.password = input.password;
    this.type = input.userType;
}
const DB = function () {
    var employeTable = [];
    function Insert(employe, callback) {
        employe.id = ++employeeID;
        employeTable.push(employe);
        //To Replicate Insertion
        setTimeout(function () {
            if (callback)
                callback(employe.id)
        }, 200);
    }
    function GetAll(callback) {
        if (callback) {
            setTimeout(function () {
                callback(employeTable);
            }, 100);
        }
    }
    function Get(id, callback) {
        if (callback) {
            setTimeout(function () {
                callback(employeTable.find(x => x.id == id));
            }, 200);
        }
    }
    function GetUserByEmailPassword(email, password, callback) {
        if (callback) {
            setTimeout(function () {
                var emp = employeTable.find(x => x.email == email);
                if (emp != null && emp.password == password) {
                    callback(emp);
                } else {
                    callback(null);
                }
            }, 200);
        }
    }

    function Update(id, employe, callback) {
        Get(id, function (emp) {

            if (callback) {
                if (emp == null) {
                    callback(false)
                    return;
                }
                emp.name = employe.name;
                emp.phone = employe.phone
                callback(true);
            }
        });
    }

    function Delete(id, callback) {
        Get(id, function (emp) {
            if (callback) {
                if (!emp){
                    callback(false);
                    return;
                }
                var index = employeTable.indexOf(emp);
                employeTable.splice(index, 1);
                callback(true);
            }
        });
    }
    return {
        insert: Insert,
        get: Get,
        getAll: GetAll,
        update: Update,
        delete: Delete,
        getUserByEmailPass: GetUserByEmailPassword
    }
}();

module.exports = {
    employee: Employee,
    db: DB
};