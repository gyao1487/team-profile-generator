const initQuestions = [{
    type: 'input',
    name: 'mngName',
    message: `Please enter the team manager's name:`
},
{
    type: 'input',
    name: 'mngId',
    message: 'Please enter their employee ID:',
},
{
    type: 'input',
    name: 'mngEmail',
    message: 'Please enter their email address:',
},
{
    type: 'input',
    name: 'office',
    message: 'Please enter the office number:',
},

];

const menuQuestion = {
    type: 'list',
    name: 'menu',
    message: 'Team manager card has been created. Please choose your next action:',
    choices: [
        'Add an engineer to the team',
        'Add an intern to the team',
        "Finalize team and generate roster"
    ]
}

const engQuestions = [{
    type: 'input',
    name: 'engName',
    message: `Please enter the engineer's name:`
},
{
    type: 'input',
    name: 'engId',
    message: 'Please enter their employee ID:',
},
{
    type: 'input',
    name: 'engEmail',
    message: 'Please enter their email address:',
},
{
    type: 'input',
    name: 'engGithub',
    message: 'Please enter their Github username:',
},
];

const intQuestions = [{
    type: 'input',
    name: 'intName',
    message: `Please enter the engineer's name:`
},
{
    type: 'input',
    name: 'intId',
    message: 'Please enter their employee ID:',
},
{
    type: 'input',
    name: 'intEmail',
    message: 'Please enter their email address:',
},
{
    type: 'input',
    name: 'intSchool',
    message: 'Please enter the name of their school:',
},
];