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
            message: 'What is the github username?',
            name: 'github'
        },
        {
             type: 'input',
             message: 'what is your intern name?',
             name: 'intern'
        },
        {
            type: 'input',
            message: 'what is your intern id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'what is your intern email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What school did the intern attend?',
            name: 'school'
        },
        {
            type: 'input',
            message: 'What is your name of your engineer?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the id of your engineer?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the email for your engineer?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the github username for your engineer?',
            name: 'school'
        },
    ])
 };
    
    