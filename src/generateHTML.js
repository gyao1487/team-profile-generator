//Dependencies
const { fstat } = require("fs");

//Manager Template
function mngHTML(data) {
    return `
    <div class="card manager">
        <h3>${data.name}</h3>
        <h4> :) ${data.role}</h4>
        <div class = "info">
            <p>ID: ${data.id}</p>
            <p>Email: ${data.email}</p>
            <p>Office Number: ${data.office}</p>
        </div>
    </div>`
}

//Engineer Template
function engHTML (data) {
    return `
    <div class="card engineer">
        <h3>${data.name}</h3>
        <h4> :) ${data.role}</h4>
        <div class = "info">
            <p>ID: ${data.id}</p>
            <p>Email: ${data.email}</p>
            <p>Office Number: ${data.github}</p>
        </div>
    </div>`
}

//Intern Template
function intHTML (data) {
    return `
    <div class="card intern">
        <h3>${data.name}</h3>
        <h4> :) ${data.role}</h4>
        <div class = "info">
            <p>ID: ${data.id}</p>
            <p>Email: ${data.email}</p>
            <p>Office Number: ${data.github}</p>
        </div>
    </div>`
}

//Full HTML Template
function combineHTML(data) {
    return`
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style.css">
            <link rel="stylesheet" href="./normalize.css">
            <title>Team Roster</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
                ${data}
            </main>
            
        </body>
        </html>`

}


// Loop through your team array


// loop through roster and push each object to the template to its type

// after all respective templates are completed, append to the main generateHTML.js template

// Each type of employee will have their own template
//function createEngineer()

module.exports = {mngHTML, engHTML, intHTML, combineHTML}

//fs.appendFile