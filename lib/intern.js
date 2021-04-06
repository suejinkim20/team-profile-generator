const Employee = require ("./employee")

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        //override "Employee"?
        return "Intern"
    }
}