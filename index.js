const inquirer = require("inquirer");
const fs = require("fs");
// TODO: create tests
const jest = require("jest");
// TODO: create 3 classes (employee roles)
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/template")
const util = require("util");

// create writeFile function using promises instead of a callback function
// TODO: understand in more detail what this function does
//const writeFileAsync = util.promisify(fs.writeFile);
let team = [];

// using writeFileAsync as a promise
// TODO: understand in more detail what this function does
// TODO: figure out how to append to the HTML, ? addHTML
// TODO: figure out how to indicate when the HTML input is complete and ready to be rendered
// probably use 'new' keyword to enter the new members
const init = () => {
  addManager();
};

// TODO:  Add no content entered into all validations
// User validations
const validateName = (input) => {
  // if user input a number the app will stop
  if (input > 1) {
    return "To continue, enter a valid name";
  } else {
    return true;
  }
};
const validateNumber = (input) => {
  // TODO: understand parseFloat's use here
  // if user input is not a number (parseFloat turns strings into numbers) the app will stop
  if ((input = isNaN(parseFloat(input)))) {
    return "Not a number, please try again";
  } else {
    return true;
  }
};
const validateEmail = (input) => {
  // if user input includes an @ symbol the app will continue, if not the user receives a validation message
  if (input.includes("@")) {
    return true;
  } else {
    return "Invalid email, try again";
  }
};
const validateGithub = (input) => {
  // if user inputs an empty string, the app will stop
  if (input.isEmpty) {
    return "To continue, enter a valid GitHub account name";
  } else {
    return true;
  }
};

// questions prompts for user
const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Team manager name?",
        validate: validateName,
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
        validate: validateNumber,
      },
      {
        type: "input",
        name: "email",
        message: "Preferred email?",
        validate: validateEmail,
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office number?",
        validate: validateNumber,
      },
      {
        type: "list",
        name: "moreMembers",
        message: "Are there more team members to add?",
        choices: ["yes", "no"],
      },
    ])
    .then((answers) => {
      team.push(
        new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        )
      );
      if (answers.moreMembers == "yes") {
        moreTeamMembers();
      }
      else{
        fs.writeFileSync("dist/index.html", generateHTML.generateHTML(team))

      }
    }).catch(err => console.log(err));
};

const moreTeamMembers = () => {
  return inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "Employee name?",
        validate: validateName,
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
        validate: validateNumber,
      },
      {
        type: "input",
        name: "email",
        message: "Preferred email?",
        validate: validateEmail,
      },
      {
        type: "list",
        name: "role",
        message: "What is your role at the company?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "github",
        message: "GitHub username: ",
        validation: validateGithub,
      },
      {
        type: "input",
        name: "school",
        message: "What school do you attend?",
        validate: validateName,
      },
      {
        type: "list",
        name: "moreMembers",
        message: "Are there more team members to add?",
        choices: ["yes", "no"],
      },
    ])
    .then((answers) => {
      if (answers.role == "Engineer") {
        team.push(
          new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          )
        );
      } else {
        team.push(
          new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          )
        );
      }
      if (answers.moreMembers == "yes") {
        moreTeamMembers();
      } else {
        fs.writeFileSync("dist/index.html", generateHTML.generateHTML(team))
      }
    }).catch(err => console.log(err));
};


console.log(
  "Welcome to the Team Profile Generator, please input your employee info as requested."
);
init();
