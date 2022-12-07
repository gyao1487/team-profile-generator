//Dependencies

const { fstat } = require("fs");

// Template goes here




// Loop through your team array

function generateHTML() {
    // loop through roster and push each object to the template to its type
    for (let i = 0; i < app.rosterArray.length; i++) {
        switch (app.rosterArray[i]) {
            case 'Manager':
                console.log('This is a Manager!')
                break;
            case 'Engineer':
                console.log('This is an Engineer')
                break;
            case 'Intern':
                console.log('This is an employee')
                break;
        }
    }
};
// after all respective templates are completed, append to the main generateHTML.js template

// Each type of employee will have their own template
//function createEngineer()

module.exports = generateHTML

//fs.appendFile