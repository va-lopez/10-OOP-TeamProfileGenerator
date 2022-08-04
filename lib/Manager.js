const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,officeNum){
        super(name,id,email);

        this.officeNum = officeNum;
        this.role = "Manager";
    }

    getOfficeNum(){
        return `<li class = 'list-group-item'>Office number: ${this.officeNum}</li>`;
    }
}

module.exports = Manager;
