const inquirer = require('inquirer');
const fs = require('fs');

const roleArray = [ 'Manager', 'Engineer', 'Intern']

function buildTeam ( ) {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the name of your employee?',
            name: 'employee'
        },
        {
            type: 'input',
            message: 'What is their id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'email'
        },
        {
            type: 'list', 
            message: 'What is their role?',
            name: 'role',
            choices: roleArray
        }
    ])
}

buildTeam( )