const { finalize } = require('rxjs');
const App = require('./lib/App')
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const {mngQuestions, menuQuestion, engQuestions, intQuestions} = require('./lib/Questions');
//Initialize new object for App
const app = new App();



//Start the app by starting the Manager prompts
async function init() {
    try {
       await app.mngPrompt();
       //function for writing HTML
       
    } catch (err) {
        console.log("Sorry, we've encountered an error!")
    }
}


// By the end of this function, you will have generated markdown 
init();