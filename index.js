const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./lib/questions");

inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers)
    })