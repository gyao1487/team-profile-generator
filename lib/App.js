//External Packages
const fs = require('fs');
const inquirer = require('inquirer');

//Class Packages
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Employee = require('./Employee')
//Questions Packages
const { mngQuestions, menuQuestion, engQuestions, intQuestions } = require('./Questions');
//Template Packages
const { mngHTML, engHTML, intHTML, combineHTML} = require('../src/generateHTML');
const { default: generate } = require('@babel/generator');

//Empty array that will store templates created for each employee
const rosterHTML = []

//Class for array of employee objects
class App {
    //Create new array object
    constructor() {
        this.rosterArray = []
    }

    mngPrompt() {
        inquirer
            .prompt(mngQuestions)
            .then((data) => {
                const manager = new Manager(data.mngName, data.mngId, data.mngEmail, data.office);
                this.rosterArray.push(manager);
                console.log(`\n Manager ${data.mngName} successfully saved. \n`);
                this.menuPrompt();
            })
    }

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
                console.log(`\n Engineer ${data.engName} successfully saved. \n`);
                this.menuPrompt();
            })
    }

    intPrompt() {
        inquirer
            .prompt(intQuestions)
            .then((data) => {
                const intern = new Intern(data.intName, data.intId, data.intEmail, data.intSchool);
                this.rosterArray.push(intern);
                console.log(`\n Intern ${data.intName} successfully saved. \n`);
                this.menuPrompt();
            })
    }
    //Function to push saved employee profiles to HTML template
    finalize() {
        console.log('Team has been finalized! Creating your roster...\n');
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
        this.generateHTML();
    };

    generateHTML() {
       let finalHTML = combineHTML(rosterHTML.join(''));
        fs.writeFile(__dirname + '/../dist/index.html', finalHTML, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("Yay! Roster was successfully created.\n");
                console.log("Please open index.html in your browser to view your roster.");
            }
        }); 
    }

   
}

module.exports = App;