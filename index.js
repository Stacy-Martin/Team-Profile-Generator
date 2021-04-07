const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const employeeQuestions = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'employeeID',
      message: 'Input your employee ID please:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your preferred email?',
    },
    {
      type: 'list',
      name: 'role',
      message: 'What is your role at the company?',
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username: ',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school do you attend?',
    },
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
  <title>Team Profile Generator</title>
</head>

<body>
  <div class="row">
    <div class="col hoverable">
        <div class="card">
            <h1 class="name-header">${answers.name}</h1>
            <h2 class="role-header2">${answers.role}</h2>
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${answers.employeeID}</li>
                <li class="list-group-item">Email: ${answers.email}</li>

                <a href="mailto:sbrown1031@gmail.com" target="_blank">

                <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
                <li class="list-group-item">GitHub username: ${answers.github}</li>
                <li class="list-group-item">School: ${answers.school}</li>    
            </ul>
        </div>
    </div>
  </div>
</body>
</html>`;

// using writeFileAsync as a promise
const init = () => {
  employeeQuestions()
    .then((answers) => writeFileAsync('dist/index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
