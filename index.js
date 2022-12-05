const { finalize } = require('rxjs');
const App = require('./lib/App')
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const {mngQuestions, menuQuestion, engQuestions, intQuestions} = require('./lib/Questions');
//Initialize new object for App
const app = new App();

//Start the app
app.mngPrompt();
// let rosterArray = [];

// function mngPrompt() {
//     inquirer
//         .prompt(mngQuestions)
//         .then((data) => {
//             const manager = new Manager( data.mngName, data.mngId, data.mngEmail, data.office );
//             rosterArray.push(manager);
//             console.log(rosterArray);
//             intEngPrompt();
//         })
//     }

// function intEngPrompt() {
//         inquirer
//             .prompt(menuQuestion)
//             .then((data) => {
//                 switch (data.menu) {
//                     case 'Add an engineer to the team':
//                         this.engPrompt();
//                         // this.menuPrompt();
//                         break;
//                     case  'Add an intern to the team':
//                         this.intPrompt();
//                         // this.menuPrompt();
//                         break;
//                     case "Finalize team and generate roster":
//                         this.finalize()
//                         break;
//                 }
//             })
//     }

// function engPrompt() {
//         inquirer
//         .prompt(engQuestions)
//         .then((data) => {
//             const engineer = new Engineer( data.engName, data.engId, data.engEmail, data.engGithub );
//             this.rosterArray.push(engineer);
//             console.log(this.rosterArray);
//         })
//     }

// function intPrompt() {
//         inquirer
//         .prompt(intQuestions)
//         .then((data) => {
//             const intern = new Intern( data.intName, data.intId, data.intEmail, data.intSchool );
//             this.rosterArray.push(intern);
//             console.log(this.rosterArray);
//         })
//     }

// mngPrompt();
