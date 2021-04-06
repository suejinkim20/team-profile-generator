const Employee = require ("./employee")

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;
    }

    getGitHub() {

    }

    getRole() {
        //override "Employee"?
        return "Engineer"

    }
}