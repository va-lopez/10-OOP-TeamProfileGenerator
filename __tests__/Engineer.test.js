const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object' , () =>{
    const name = 'Alec';
    const id = '2';
    const email = 'Alec@fakeemail.com';
    const github = 'ibealec'

    const engineer = new Engineer(name,id,email,github);
    expect(engineer.name).toBe('Alec');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('Alec@fakeemail.com');
    expect(engineer.github).toBe("ibealec");
});

//get name
test('get name of Engineer', () =>{
    const name = 'Alec';
    const id = '2';
    const email = 'Alec@fakeemail.com';
    const github = 'ibealec'

    const engineer = new Engineer(name,id,email,github);
    expect(engineer.getName()).toEqual(expect.stringContaining(name));
});

//get ID
test('get id of Engineer', () =>{
    const name = 'Alec';
    const id = '2';
    const email = 'Alec@fakeemail.com';
    const github = 'ibealec'

    const engineer = new Engineer(name,id,email,github);
    expect(engineer.getId()).toEqual(expect.stringContaining(id));
});

//get Email
test('get email of Engineer', () =>{
    const name = 'Alec';
    const id = '2';
    const email = 'Alec@fakeemail.com';
    const github = 'ibealec'

    const engineer = new Engineer(name,id,email,github);
    expect(engineer.getEmail()).toEqual(expect.stringContaining(email));
});

//get Role
test('get role of Engineer', () =>{
    const name = 'Alec';
    const id = '2';
    const email = 'Alec@fakeemail.com';
    const github = 'ibealec'

    const engineer = new Engineer(name,id,email,github);
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

//get office number
test('get office number of Engineer', () =>{
    const name = 'Alec';
    const id = '2';
    const email = 'Alec@fakeemail.com';
    const github = 'ibealec'

    const engineer = new Engineer(name,id,email,github);
    expect(engineer.getGithub()).toEqual(expect.stringContaining('ibealec'));
});

