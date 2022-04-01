const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');

choices: [ 'Manager', 'Engineer', 'Intern']

function buildTeam ( ) {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the name of your manager?',
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
            type: 'input', 
            message: 'What is their office number?',
            name: 'officeNumber'
        },
        {
            type: 'input',
            message: 'what is your employee name?',
            name: 'employee'
        },
        {
            type: 'input',
            message: 'what is your employee id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'what is your employee email?',
            name: 'email'
        },
        {
            type: 'list',
            message: 'Would you like to add another team member?',
            name: 'teamMember',
            choices: [ 'yes', 'no']
        },
    ]).then(response => {
        if(response === true) {
            getEmployeeData( ) 
        }else{
            fs.writeFile()
        }

        {
            type: 'list',
            message: 'what is your employee role?',
            name: 'role',
            choices: [ 'Engineer', 'Intern']
        } 
    ])         
}
    

buildTeam( )