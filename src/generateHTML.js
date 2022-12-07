//Dependencies

const { fstat } = require("fs");

// Template goes here
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



// Loop through your team array


// loop through roster and push each object to the template to its type

// after all respective templates are completed, append to the main generateHTML.js template

// Each type of employee will have their own template
//function createEngineer()

module.exports = {mngHTML, engHTML, intHTML}

//fs.appendFile