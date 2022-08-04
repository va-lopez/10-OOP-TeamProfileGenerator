const Employee = require('../lib/Employee.js');

test('creates an employee object' , () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';

    const employee = new Employee(name,id,email);
    expect(employee.name).toBe('Jared');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('jared@fakeemail.com');
});

//get name
test('get name of employee', () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';

    const employee = new Employee(name,id,email);
    expect(employee.getName()).toEqual(expect.stringContaining(name));
});

//get ID
test('get id of employee', () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';

    const employee = new Employee(name,id,email);
    expect(employee.getId()).toEqual(expect.stringContaining(id));
});

//get Email
test('get email of employee', () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';

    const employee = new Employee(name,id,email);
    expect(employee.getEmail()).toEqual(expect.stringContaining(email));
});

//get Role
test('get role of employee', () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';

    const employee = new Employee(name,id,email);
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});

