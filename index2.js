// //insert require statements
// const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const {writeFile,copyFile} = require('./utils/generate-site');
// const Manager = require('./lib/Manager.js');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');
// const team = [];

// //ask questions for inquirer
// const managerQuestions = ["What is the team manager's name?","What is the team manager's id?","What is the team manager's email?", "What is the team manager's office number?"];
// const engineerQuestions = ["What is your engineer's name?","What is your engineer's id?","What is your engineer's email?", "What is your engineer's Github username?"];
// const internQuestions = ["What is the intern's name?","What is the intern's id?","What is the intern's email?", "What is the intern's school?"];

// const promptManager = () => {
//     inquirer.prompt([
//         //get name
//         {
//             type:'input',
//             name: 'name',
//             message: managerQuestions[0],
//             validate: nameInput =>{
//                 if(nameInput){
//                     return true;
//                 }else{
//                     console.log('Please enter a valid name');
//                     return false;
//                 }
//             }
//         },
//         //get id
//         {
//             type:'input',
//             name: 'id',
//             message: managerQuestions[1],
//             validate: idInput =>{
//                 if(idInput){
//                     return true;
//                 }else{
//                     console.log('Please enter a valid id');
//                     return false;
//                 }
//             }
//         },
//         //get email
//         {
//             type:'input',
//             name: 'email',
//             message: managerQuestions[2],
//             validate: emailInput =>{
//                 if(emailInput){
//                     return true;
//                 }else{
//                     console.log('Please enter a valid email');
//                     return false;
//                 }
//             }
//         },
//         //get extra info
//         {
//             type:'input',
//             name: 'extraInfo',
//             message: managerQuestions[3],
//             validate: extraInput =>{
//                 if(extraInput){
//                     return true;
//                 }else{
//                     console.log('Please enter a valid entry');
//                     return false;
//                 }
//             }
//         }
//     ])
//     .then((managerData) => {
//         const [name,id,email,officeNum] = Object.values(managerData);
//         const manager = new Manager(name,id,email,officeNum);
//         team.push(manager);
//     });
// };

// const promptEmployee = questions => {
//     inquirer.prompt([
//         {
//             type:'list',
//             name:'addEmployee',
//             message:'What time of employee would you like to add?',
//             choices:["Engineer","Intern","Manager","None"]
//         },
//         //get name
//         {
//             type:'input',
//             name: 'name',
//             message: questions[0],
//             validate: nameInput =>{
//                 if(nameInput){
//                     return true;
//                 }else{
//                     console.log('Please enter a valid name');
//                     return false;
//                 }
//             }
//         },
//         //get id
//         {
//             type:'input',
//             name: 'id',
//             message: questions[1],
//             validate: idInput =>{
//                 if(idInput){
//                     return true;
//                 }else{
//                     console.log('Please enter a valid id');
//                     return false;
//                 }
//             }
//         },
//         //get email
//         {
//             type:'input',
//             name: 'email',
//             message: questions[2],
//             validate: emailInput =>{
//                 if(emailInput){
//                     return true;
//                 }else{
//                     console.log('Please enter a valid email');
//                     return false;
//                 }
//             }
//         },
//         //get extra info
//         {
//             type:'input',
//             name: 'extraInfo',
//             message: questions[3],
//             validate: extraInput =>{
//                 if(extraInput){
//                     return true;
//                 }else{
//                     console.log('Please enter a valid entry');
//                     return false;
//                 }
//             }
//         }
//     ])
//     .then((employeeData) => {
//         if(employeeData.addEmployee === "Engineer"){
//             const [name,id,email,github] = Object.values(engineerData);
//             const engineer = new Engineer(name,id,email,github);
//             team.push(engineer);
//             promptEmployee();
//         }else if(employeeData.addEmployee === "Intern"){
//             const [name,id,email,school] = Object.values(internData);
//             const intern = new Intern(name,id,email,school);
//             team.push(intern);
//             promptEmployee();
//         }else
//             return false;
//     })
// };

// promptManager()
// .then(promptEmployee);


// const fs = require('fs');
const inquire = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
// const renderHtml = require('./lib/htmlrender');
// const renderCss = require('./lib/cssrender');

const teamMembers = [];

const isValid = (value) => {
    if (value === "") {
        return "Please type in an answer";
    } else {
        return true;
    }
}

const questions = [{
        type: "list",
        message: "Choose the role of the employee:",
        choices: ["Manager", "Intern", "Engineer"],
        name: "employee",
    },
    {
        type: "input",
        message: "What is the name of the employee?",
        name: "employeeName",
        validate: isValid
    },
    {
        type: "input",
        message: "What is the ID for the employee?",
        name: "id",
        validate: isValid
    },
    {
        type: "input",
        message: "What is the email for the employee?",
        name: "email",
        validate(value) {
            const pass = value.includes("@");
            if (pass) {
                return true;
            } else {
                return "Please enter a valid email";
            }
        }
    },
    {
        type: "input",
        message: "What is the office number for the manager?",
        name: "officeNumber",
        validate: isValid,
        when: (answer) => answer.employee === "Manager"
    },
    {
        type: "input",
        message: "What is the github for the engineer?",
        name: "github",
        validate: isValid,
        when: (answer) => answer.employee === "Engineer"
    },
    {
        type: "input",
        message: "What is the school of the intern?",
        name: "school",
        validate: isValid,
        when: (answer) => answer.employee === "Intern"
    },
    {
        type: "list",
        message: "Add a member or quit?",
        choices:["Add member", "Quit"],
        name: "isFinished"
    }
];


function generateIntern(data) {
    const intern = new Intern(data.employeeName, data.id, data.email, data.school);
    teamMembers.push(intern);
}

function generateEngineer(data) {
    const engineer = new Engineer(data.employeeName, data.id, data.email, data.github);
    teamMembers.push(engineer);
}

function generateManager(data) {
    const manager = new Manager(data.employeeName, data.id, data.email, data.officeNumber);
    teamMembers.push(manager);
}

function writeHtml(html) {
    fs.writeFile('./dist/index.html', html, (err) => {
        err ? console.error(err) : console.log("HTML generated!")
    })
}

function writeCss(css) {
    fs.writeFile('./dist/style.css', css, (err) => {
        err ? console.error(err) : console.log("CSS generated!")
    })
}

function decideEmployee(data) {
    switch (data.employee) {
        case "Manager": {
            generateManager(data);
            break;
        }
        case "Engineer": {
            generateEngineer(data);
            break;
        }
        case "Intern": {
            generateIntern(data);
            break;
        }
    }
}

function employeeAnswers() {
    inquire
        .prompt(questions)
        .then((response => {
            if (response.isFinished === "Quit") {
                // decideEmployee(response);
                // writeCss(renderCss());
                // writeHtml(renderHtml(teamMembers));
            } else {
                decideEmployee(response);
                employeeAnswers();
            }

        }));
}

function init() {
    employeeAnswers();
}

init();
