const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {writeFile} = require('./utils/generate-site');

//employee classes
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
//add new employees into the array
const team = [];

//ask questions for inquirer
const managerQuestions = ["What is the team manager's name?","What is the team manager's id?","What is the team manager's email?", "What is the team manager's office number?"];
const engineerQuestions = ["engineer","What is your engineer's name?","What is your engineer's id?","What is your engineer's email?", "What is your engineer's Github username?"];
const internQuestions = ["intern","What is the intern's name?","What is the intern's id?","What is the intern's email?", "What is the intern's school?"];

//begin by asking the manager for their general information
const buildTeam = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: managerQuestions[0],
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter a valid name');
                    return false;
                }
            }
        },
        //get id
        {
            type:'input',
            name: 'id',
            message: managerQuestions[1],
            validate: idInput =>{
                if(idInput){
                    return true;
                }else{
                    console.log('Please enter a valid id');
                    return false;
                }
            }
        },
        //get email
        {
            type:'input',
            name: 'email',
            message: managerQuestions[2],
            validate: emailInput =>{
                if(emailInput){
                    return true;
                }else{
                    console.log('Please enter a valid email');
                    return false;
                }
            }
        },
        //get extra info
        {
            type:'input',
            name: 'extraInfo',
            message: managerQuestions[3],
            validate: extraInput =>{
                if(extraInput){
                    return true;
                }else{
                    console.log('Please enter a valid entry');
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        //create the manager object
        const [name,id,email,officeNum] = Object.values(managerData);
        const manager = new Manager(name,id,email,officeNum);
        team.push(manager);
    })
    .then(addEmployee);
  };

//function to ask if you want to add employee
const addEmployee = () => {
    return inquirer
      .prompt([
        {
            type:'list',
            name:'addEmployee',
            message:'What time of employee would you like to add?',
            choices:["Engineer","Intern","None"]
        }
    ])
    .then(answer => {
        //determine which questions to pass
        if(answer.addEmployee ==="None"){
            generateHTML();
            return;
        }
        if(answer.addEmployee ==="Engineer")    
            var questions = engineerQuestions;
        else if(answer.addEmployee === "Intern")
            var questions = internQuestions;

        getInfo(questions);
    });
};

//get the information for the given employee
const getInfo = questions => {
    return inquirer
      .prompt([
        //get name
        {
            type:'input',
            name: 'name',
            message: questions[1],
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter a valid name');
                    return false;
                }
            }
        },
        //get id
        {
            type:'input',
            name: 'id',
            message: questions[2],
            validate: idInput =>{
                if(idInput){
                    return true;
                }else{
                    console.log('Please enter a valid id');
                    return false;
                }
            }
        },
        //get email
        {
            type:'input',
            name: 'email',
            message: questions[3],
            validate: emailInput =>{
                if(emailInput){
                    return true;
                }else{
                    console.log('Please enter a valid email');
                    return false;
                }
            }
        },
        //get extra info
        {
            type:'input',
            name: 'extraInfo',
            message: questions[4],
            validate: extraInput =>{
                if(extraInput){
                    return true;
                }else{
                    console.log('Please enter a valid entry');
                    return false;
                }
            }
        }
      ])
      .then(projectData => {
        //create the employee and push into the team array
        const [name,id,email,extra] = Object.values(projectData);
        if(questions[0] === "engineer"){
            const engineer = new Engineer(name,id,email,extra);
            team.push(engineer);
        }else{
            const intern = new Intern(name,id,email,extra);
            team.push(intern);
        }
        addEmployee();
      });
};

//create the html file for the team
const generateHTML = () => {
    let data = generatePage(team);
    let response = writeFile(data);
}

//start by getting manager info, then adding team info
buildTeam();