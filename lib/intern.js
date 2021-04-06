const Employee = require ("./employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;        
    }

    getSchool() {

    }

    getRole() {
        //override "Employee"?
        return "Intern"
    }
}

module.exports = Intern;