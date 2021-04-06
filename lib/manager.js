const Employee = require ("./employee")

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber
    }
    getRole(){
        //override "Employee"?
        return "Manager"
    }
}