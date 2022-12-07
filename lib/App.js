//External Packages
const fs = require('fs');
const inquirer = require('inquirer');

//Internal Packages
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Employee = require('./Employee')
const generateHTML = require('../src/generateHTML');

//Questions Arrays
const { mngQuestions, menuQuestion, engQuestions, intQuestions } = require('./Questions');
const { mngHTML, engHTML, intHTML } = require('../src/generateHTML');

//const finalHTML = require('../src/')

const rosterHTML = []


//Class for array of employee objects
class App {
    //Create new array object
    constructor() {
        this.rosterArray = []
    }

    // start() {
    //     this.mngPrompt().then(this.menuPrompt());
    // }
    //Start prompt with inquirer - first set of questions are team manager questions
    mngPrompt() {
        inquirer
            .prompt(mngQuestions)
            .then((data) => {
                const manager = new Manager(data.mngName, data.mngId, data.mngEmail, data.office);
                this.rosterArray.push(manager);
                console.log(this.rosterArray);
                this.menuPrompt();
            })
    }
    //Menu prompt for deciding next steps
    menuPrompt() {
        inquirer
            .prompt(menuQuestion)
            .then((data) => {
                switch (data.menu) {
                    case 'Add an engineer to the team':
                        this.engPrompt();
                        break;
                    case 'Add an intern to the team':
                        this.intPrompt();
                        // this.menuPrompt();
                        break;
                    case "Finalize team and generate roster":
                        this.finalize()
                        break;
                }
            })
    }

    engPrompt() {
        inquirer
            .prompt(engQuestions)
            .then((data) => {
                const engineer = new Engineer(data.engName, data.engId, data.engEmail, data.engGithub);
                this.rosterArray.push(engineer);
                console.log(this.rosterArray);
                this.menuPrompt();
            })
    }

    intPrompt() {
        inquirer
            .prompt(intQuestions)
            .then((data) => {
                const intern = new Intern(data.intName, data.intId, data.intEmail, data.intSchool);
                this.rosterArray.push(intern);
                console.log(this.rosterArray);
                this.menuPrompt();
            })
    }

    finalize() {
        console.log('Team has been finalized! Preparing your roster...');
        for (let i = 0; i < this.rosterArray.length; i++) {
            switch (this.rosterArray[i].role) {
                case 'Manager':
                    rosterHTML.push(mngHTML(this.rosterArray[i]));
                    break;
                case 'Engineer':
                    rosterHTML.push(engHTML(this.rosterArray[i]));
                    break;
                case 'Intern':
                    rosterHTML.push(intHTML(this.rosterArray[i]));
                    break;
            }
        };
        console.log(rosterHTML.join(''));

        fs.writeFile(__dirname + '/../dist/test.html', rosterHTML.join(''), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
                console.log("The written has the following contents:");
                console.log(fs.readFileSync("test.html", "utf8"));
            }
        })
    };
}



//Retrieve the array to insert into template 
//If choose "finalize roster" then start generating HTML
// Function that writes html and puts into dist folder 




module.exports = App;