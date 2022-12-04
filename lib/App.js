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

    
//Create new array object

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


    //If choose "finalize roster" then start generating HTML
    // Function that writes html and puts into dist folder 

};


module.exports = App;