const inquirer = require('inquirer');
const fs = require('fs');
// QUESTION: do i use util?
const util = require('util');
// TODO: create tests
const jest = require('jest');
// TODO: create 3 classes (employee roles)
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// create writeFile function using promises instead of a callback function
// TODO: understand in more detail what this function does
const writeFileAsync = util.promisify(fs.writeFile);


// using writeFileAsync as a promise
// TODO: understand in more detail what this function does
// TODO: figure out how to append to the HTML, ? addHTML
// TODO: figure out how to indicate when the HTML input is complete and ready to be rendered
// probably use 'new' keyword to enter the new members 
const init = () => {
    employeeQuestions()
      .then((answers) => writeFileAsync('dist/index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  

// TODO:  Add no content entered into all validations
// User validations
const validateName = (input) =>{
    // if user input a number the app will stop
    if (input > 1) {
        return 'To continue, enter a valid name';
    } else {
        return true;
    }
}
const validateNumber = (input) =>{
    // TODO: understand parseFloat's use here 
    // if user input is not a number (parseFloat turns strings into numbers) the app will stop
    if (input = isNaN(parseFloat(input))) {
        return 'Not a number, please try again';
    } else {
        return true;
    }
}
const validateEmail = (input) =>{
    // if user input includes an @ symbol the app will continue, if not the user receives a validation message
    if (input.includes('@')) {
        return true;
    } else {
        return 'Invalid email, try again';
    }
}
const validateGithub = (input) =>{
    // if user inputs an empty string, the app will stop
    if (input.isEmpty) {
        return 'To continue, enter a valid GitHub account name';
    } else {
        return true;
    }
}

// questions prompts for user
const employeeQuestions = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Team member name?',
      validate: validateName,
    },
    {
      type: 'input',
      name: 'employeeID',
      message: 'Employee ID:',
      validate: validateNumber,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Preferred email?',
      validate: validateEmail,
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office number?',
        validate: validateNumber,
    },
    {
      type: 'list',
      name: 'role',
      message: 'What is your role at the company?',
      choices: ["Manager", "Engineer", "Intern",],
    },
    {
      type: 'input',
      name: 'github',
      message: 'GitHub username: ',
      validation: validateGithub,
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school do you attend?',
      validate: validateName,
    },
    {
      type: 'list',
      name: 'moreMembers',
      message: 'Are there more team members to add?',
      choices: ["yes", "no"]
    }
]);
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Compiled and minified Materialize CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
  <!-- fontawesome stylesheet  -->
  <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
  <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
  <!-- my CSS stylesheet link -->
  <link rel="stylesheet" href="CSS/style.css"/>
  <title>Team Profile</title>
</head>

<body>
  <div class="row">
    <div class="col hoverable">
        <div class="card">
            <h1 class="name-header">${answers.name}</h1>
            <h2 class="role-header2">${answers.role}</h2>
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${answers.employeeID}</li>
                <li class="list-group-item">Email: <a href="mailto:${answers.email}" target="_blank">${answers.email}</a> </li>


                <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
                <li class="list-group-item">GitHub username: <a href="https://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                


                <li class="list-group-item">School: ${answers.school}</li>    
            </ul>
        </div>
    </div>
  </div>
</body>
</html>`;



console.log("Welcome to the Team Profile Generator, please input your employee info as requested.")
init();
