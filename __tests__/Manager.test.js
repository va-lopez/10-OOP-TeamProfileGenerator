const Manager = require('../lib/Manager.js');

test('creates an Manager object' , () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';
    const officeNum = "1";

    const manager = new Manager(name,id,email,officeNum);
    expect(manager.name).toBe('Jared');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('jared@fakeemail.com');
    expect(manager.officeNum).toBe("1");
});

//get name
test('get name of Manager', () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';
    const officeNum = "1";

    const manager = new Manager(name,id,email,officeNum);
    expect(manager.getName()).toEqual(expect.stringContaining(name));
});

//get ID
test('get id of Manager', () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';
    const officeNum = "1";

    const manager = new Manager(name,id,email,officeNum);
    expect(manager.getId()).toEqual(expect.stringContaining(id));
});

//get Email
test('get email of Manager', () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';
    const officeNum = "1";

    const manager = new Manager(name,id,email,officeNum);
    expect(manager.getEmail()).toEqual(expect.stringContaining(email));
});

//get Role
test('get role of Manager', () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';
    const officeNum = "1";

    const manager = new Manager(name,id,email,officeNum);
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});

//get office number
test('get office number of Manager', () =>{
    const name = 'Jared';
    const id = '1';
    const email = 'jared@fakeemail.com';
    const officeNum = "1";

    const manager = new Manager(name,id,email,officeNum);
    expect(manager.getOfficeNum()).toEqual(expect.stringContaining('1'));
});

