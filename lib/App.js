//External Packages
const fs = require ('fs');
const inquirer = require('inquirer');

//Internal Packages
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Engineer = require('./Intern');


//The App constructor is responsible for controlling the flow of the questions
//as well as saving the user input until it is time to generate the HTML
class App {
    start()




    finalize() {
    console.log('Your roster has successfully been generated!');
    process.exit(0);
};

}
module.exports = App;