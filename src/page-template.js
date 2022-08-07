//create bootstrap cards using employee information
const generateEmployees = employeeArray => {
    let extraInfo;

    let html = employeeArray.map((employee) => {
        extraInfo = generateExtraInfo(employee);
        //fix the capitalization of entered name
        let fixName = employee.getName().toLowerCase().split(" ");
        for(let i=0; i<fixName.length; i++){
            fixName[i] = fixName[i][0].toUpperCase()+fixName[i].substring(1);
        }
        let name = fixName.join(" ");

        return `
            <div class="card m-2" style="min-width: 18rem;">
                <div class="card-header text-white bg-info">
                <h5 class="card-title">${name}</h5>
                <h6 class = "card-subtitle mb-2"> ${employee.getRole()}</h6>
                </div>
                <div class="card-body bg-light">
                    <ul class = "list-group list-group-flush p-2 my-2 bg-white">
                    <li class = 'list-group-item'>ID: ${employee.getId()}</li>
                    <li class = 'list-group-item flex-wrap'>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    ${extraInfo}
                    </ul>
                </div>
            </div>
        `
    }).join('');
    return html;
};

//each type of employee includes a different kind of information at the end of their cards
const generateExtraInfo = employee =>{
    if(employee.getRole() === "Engineer")
        return `<li class = 'list-group-item'>Github: <a href='https://github.com/${employee.getGithub()}'>${employee.getGithub()}</a></li>`;
    else if(employee.getRole() === "Intern")
        return `<li class = 'list-group-item'>School: ${employee.getSchool()}</li>`;
    else if(employee.getRole() ==="Manager")
        return `<li class = 'list-group-item'>Office number: ${employee.getOfficeNum()}</li>`;
}

//html for full page
module.exports = employeeData =>{
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>

    <body>
        <header class ="title col-12 bg-secondary py-2 text-center text-white">
            <h1 class ="content mx-auto"> My Team </h1>
        </header>
        <section id = "team" class = "section container mt-4">
            <div class = "card-deck d-flex justify-content-start flex-wrap">
                ${generateEmployees(employeeData)}
            </div>
        </section>
    </body>
    </html>
    `;
};