//create html page using bootstrap
const generateManager = manager => {
    // console.log(manager);
    return `
        <div class="card " style="width: 18rem;">
            <div class="card-header text-white bg-info">
                ${manager.getName()}
                ${manager.getRole()}
            </div>
            <div class="card-body bg-light">
                <ul class = "list-group list-group-flush p-2 my-2 bg-white">
                    ${manager.getId()}
                    ${manager.getEmail()}
                    ${manager.getOfficeNum()}
                </ul>
            </div>
        </div>
    `;
};

const generateEmployees = employeeArray => {
    const cardinfo = `
        ${employeeArray.map(({employee}) => {
            return `
            <div class="card " style="width: 18rem;">
                <div class="card-header text-white bg-info">
                    ${employee.getName()}
                    ${employee.getRole()}
                </div>
                <div class="card-body bg-light">
                    <ul class = "list-group list-group-flush p-2 my-2 bg-white">
                        ${employee.getId()}
                        ${employee.getEmail()}
                        ${employee.getGitHub()}
                    </ul>
                </div>
            </div>
            `;
        })
        .join('')}
    `
}



module.exports = templateData =>{
    // console.log(templateData);
    //destructure page data by section
    //const {manager,engineers} = templateData;
    const {manager,employees} = templateData;
    // console.log(manager);
    // console.log(employees);
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
        <header class ="title">
            <h1 class ="content "> My Team </h1>
        </header>
        <section id = "team">
            ${generateManager(manager)}
           
        </section>
    </body>
    </html>
    `;
};
// ${generateEngineers(engineers)}
// ${generateInterns(internInfo)}