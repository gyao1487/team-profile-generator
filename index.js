const App = require('./lib/App')
const util = require('util')
const {mngQuestions, menuQuestion, engQuestions, intQuestions} = require('./lib/Questions');

//Initialize new object for App
const app = new App();

// Function to start app
async function init() {
    try {
       await app.mngPrompt();
    } catch (err) {
        console.log("Sorry, we've encountered an error!")
    }
}

init();
