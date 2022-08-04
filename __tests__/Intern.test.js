const Intern = require('../lib/Intern.js');

test('creates an Intern object' , () =>{
    const name = 'John';
    const id = '5';
    const email = 'john@fakeemail.com';
    const school = 'ZUniversity'

    const intern = new Intern(name,id,email,school);
    expect(intern.name).toBe('John');
    expect(intern.id).toBe('5');
    expect(intern.email).toBe('john@fakeemail.com');
    expect(intern.school).toBe("ZUniversity");
});

//get name
test('get name of Intern', () =>{
    const name = 'John';
    const id = '5';
    const email = 'john@fakeemail.com';
    const school = 'ZUniversity'

    const intern = new Intern(name,id,email,school);
    expect(intern.getName()).toEqual(expect.stringContaining(name));
});

//get ID
test('get id of Intern', () =>{
    const name = 'John';
    const id = '5';
    const email = 'john@fakeemail.com';
    const school = 'ZUniversity'

    const intern = new Intern(name,id,email,school);
    expect(intern.getId()).toEqual(expect.stringContaining(id));
});

//get Email
test('get email of Intern', () =>{
    const name = 'John';
    const id = '5';
    const email = 'john@fakeemail.com';
    const school = 'ZUniversity'

    const intern = new Intern(name,id,email,school);
    expect(intern.getEmail()).toEqual(expect.stringContaining(email));
});

//get Role
test('get role of Intern', () =>{
    const name = 'John';
    const id = '5';
    const email = 'john@fakeemail.com';
    const school = 'ZUniversity'

    const intern = new Intern(name,id,email,school);
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

//get school
test('get school of Intern', () =>{
    const name = 'John';
    const id = '5';
    const email = 'john@fakeemail.com';
    const school = 'ZUniversity'

    const intern = new Intern(name,id,email,school);
    expect(intern.getSchool()).toEqual(expect.stringContaining('ZUniversity'));
});

