//insert require statements
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {writeFile,copyFile} = require('./utils/generate-site');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const team = [];

//ask questions for inquirer
const managerQuestions = ["What is the team manager's name?","What is the team manager's id?","What is the team manager's email?", "What is the team manager's office number?"];
const engineerQuestions = ["What is your engineer's name?","What is your engineer's id?","What is your engineer's email?", "What is your engineer's Github username?"];
const internQuestions = ["What is the intern's name?","What is the intern's id?","What is the intern's email?", "What is the intern's school?"];


const promptUser = (employee) => {
    return inquirer.prompt([
        //get manager name
        {
            type:'input',
            name: 'name',
            message: employee[0],
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter a valid name');
                    return false;
                }
            }
        },
        //get manager id
        {
            type:'input',
            name: 'id',
            message: employee[1],
            validate: idInput =>{
                if(idInput){
                    return true;
                }else{
                    console.log('Please enter a valid id');
                    return false;
                }
            }
        },
        //get manager email
        {
            type:'input',
            name: 'email',
            message: employee[2],
            validate: emailInput =>{
                if(emailInput){
                    return true;
                }else{
                    console.log('Please enter a valid email');
                    return false;
                }
            }
        },
        //get manager office Num
        {
            type:'input',
            name: 'extraInfo',
            message: employee[3],
            validate: extraInput =>{
                if(extraInput){
                    return true;
                }else{
                    console.log('Please enter a valid entry');
                    return false;
                }
            }
        },
    ]);
};

const addTeam = teamData => {
    if(!teamData.employees){
        teamData.employees = [];
    };
    return inquirer
    .prompt([
        {
        type:'list',
        name:'addEmployee',
        message:'What time of employee would you like to add?',
        choices:["Engineer","Intern","None"],
        }
    ])
    .then(choice => {
        if(choice.addEmployee === "Engineer"){
            promptUser(engineerQuestions)
            .then(engineerData => {
                const [name,id,email,gitHub] = Object.values(engineerData);
                const engineer = new Engineer(name,id,email,gitHub);
                teamData.employees.push(engineer);
                addTeam(teamData);
            });
        }else if(choice.addEmployee ==="Intern"){
            promptUser(internQuestions)
            .then(internData => {
                const [name,id,email,school] = Object.values(internData);
                const intern = new Intern(name,id,email,school);
                teamData.employees.push(intern);
                addTeam(teamData);
            })
        }else if(choice.addEmployee === "None"){
            console.log("No more employees to add");
            return teamData;
        };
    });
};

console.log("Please build your team.");
//first start with getting the manager info.
promptUser(managerQuestions)
    .then((managerData) => {
        const team = [];
        const [name,id,email,officeNum] = Object.values(managerData);
        const manager = new Manager(name,id,email,officeNum);
        team.push(manager);
        return team;
    })
    .then((teamData) => {
        return addTeam(teamData);
    })
    .then((team) =>{
        return generatePate(team);
    })
    //then with the given html, run data here to generate the html file
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    // //then copy over the CSS to dist folder as well
    // .then(writeFileResponse=> {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    //console the output
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    //catch for errors
    // .catch(err => {
    //     console.log(err);
    // });