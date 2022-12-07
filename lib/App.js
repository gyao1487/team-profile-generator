//External Packages
const fs = require ('fs');
const inquirer = require('inquirer');

//Internal Packages
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Employee = require('./Employee')
//const generateHTML = require('../src/generateHTML');

//Questions Arrays
const {mngQuestions, menuQuestion, engQuestions, intQuestions} = require('./Questions');

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
            const manager = new Manager( data.mngName, data.mngId, data.mngEmail, data.office, 'Manager' );
            this.rosterArray.push(manager);
            console.log(this.rosterArray);
            console.log(manager.role)
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
                    case  'Add an intern to the team':
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
            const engineer = new Engineer( data.engName, data.engId, data.engEmail, data.engGithub );
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
        for (let i = 0; i < this.rosterArray.length; i++) {
            if (this.rosterArray[i]===)
            switch (this.rosterArray[i]) {
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
    }
//Start prompt with inquirer


//Use user input to create new Manager

//Push generated Manager object into the array

//Menu Prompt for next step*

    //If choose "create engineer" then start prompts for engineer
        //Use user input to create new Engineer

        //Push new Engineer into the array

        //Return to menu prompt for next step*

    //If choose "create intern" then start prompts for intern
        //Use user input to create new Intern

        //Push new Engineer into the array

        //Return to menu prompt for next step*

//Retrieve the array to insert into template 
    //If choose "finalize roster" then start generating HTML
    // Function that writes html and puts into dist folder 




module.exports = App;