const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);

        this.github = github;
        this.role = "Engineer";
    }

    getGithub(){
        return `<li class = 'list-group-item'>Github: <a href='github.com/${this.github}>${this.github}</a></li>`;
    }
}

module.exports = Engineer;
