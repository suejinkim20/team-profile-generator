module.exports = [
    {
        type: "input",
        name: "manager-name",
        message: "What is the team manager's name?",
    },
    {
        type: "input",
        name: "manager-id",
        message: "What is the team manager's id?",
    },
    {
        type: "input",
        name: "manager-email",
        message: "What is the team manager's email?",
    },
    {
        type: "input",
        name: "manager-officeNum",
        message: "What is the team manager's office number?",
    },
    {
        type: "list",
        name: "team-member-choice",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    },

]