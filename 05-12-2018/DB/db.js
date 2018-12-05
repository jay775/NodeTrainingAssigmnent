var employeeID = 0;

function Employee(name, phone) {
    this.id = ++employeeID;
    this.name = name;
    this.phone = phone;

}
const DB = function () {
    var employeTable = [];
    function Insert(employe) {
        employeTable.push(employe);
    }
    function GetAll() {
        return employeTable;
    }
    function Get(id) {
        return employeTable.find(x => x.id == id);
    }

    function Update(id, employe) {
        var emp = Get(id);
        emp.name  = employe.name;
        emp.phone = employe.phone
        
    }

    function Delete(id) {
        var emp = Get(id);
        var index = employeTable.indexOf(emp);
        employeTable.splice(index, 1);
    }
    return {
        insert: Insert,
        get: Get,
        getAll: GetAll,
        update: Update,
        delete: Delete
    }
}();

module.exports = {
    employee: Employee,
    db: DB
};