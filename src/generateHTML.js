// //Dependencies
// const { fstat } = require("fs");

//Manager Template
function mngHTML(data) {
    return `
    <div class="box red">
        <h2>${data.name}</h2>
        <h3><i class="icon fa-solid fa-mug-hot"></i>${data.role}</h3>
        <div>
            <p>ID: ${data.id}</p>
            <p>Email: ${data.email}</p>
            <p>Office Number: ${data.office}</p>
        </div>
    </div>
    `
}

//Engineer Template
function engHTML(data) {
    return `
    <div class="box orange">
        <h2>${data.name}</h2>
        <h3><i class="icon fa-solid fa-laptop-code"></i>${data.role}</h3>
        <div>
            <p>ID: ${data.id}</p>
            <p>Email: ${data.email}</p>
            <p>Github: ${data.github}</p>
        </div>
    </div>
    `
}

//Intern Template
function intHTML(data) {
    return `
    <div class="box blue">
        <h2>${data.name}</h2>
        <h3><i class="icon fa-solid fa-graduation-cap"></i>${data.role}</h3>
        <div>
            <p>ID: ${data.id}</p>
            <p>Email: ${data.email}</p>
            <p>School: ${data.school}</p>
        </div>
    </div>
    `
}

//Full HTML Template
function combineHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/normalize.css">
        <link rel="stylesheet" href="./assets/style.css">
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap"
            rel="stylesheet">
    
        <title>Team Roster</title>
        <link rel="icon" type="image/png" href="./assets/icons8-people-96.png">
    </head>
    
    <body>
        <header class="header">
            <h1>My Team</h1>
        </header>
        <main>
            <div class=cards>
                ${data}
                </div>
                </main>
            
            </body>
            <footer class="footer">
                <p>
                    Generated using <a href="https://github.com/gyao1487/team-profile-generator">Team Profile Generator</a>
                    created by <a href="https://github.com/gyao1487">Grace Yao</a>
                </p>
                <a target="_blank" href="https://icons8.com/icon/110193/people">People</a> favicon by <a target="_blank"
                    href="https://icons8.com">Icons8</a>
            
            </footer>
            
            <script src="https://kit.fontawesome.com/b0a4273bbd.js" crossorigin="anonymous"></script>
            
            </html>`

}

module.exports = { mngHTML, engHTML, intHTML, combineHTML }