class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName(){
        return `<h5 class="card-title">${this.name}</h5>`;
    }

    getId(){
        return `<li class = 'list-group-item'>ID: ${this.id}</li>`;
    }

    getEmail(){
        return `<li class = 'list-group-item'>Email: <a href="mailto:${this.email}">${this.id}</a></li>`;
    }

    getRole(){
        return `<h6 class = "card-subtitle mb-2">${this.role}</h6>`;
    }
}

module.exports = Employee;