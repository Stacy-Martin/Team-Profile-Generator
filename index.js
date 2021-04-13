const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/template")
const util = require("util");

let team = [];

// using writeFileAsync as a promise
const init = () => {
  addManager();
};

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
    .prompt([{
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
      } else {
        fs.writeFileSync("dist/index.html", generateHTML.generateHTML(team))

      }
    }).catch(err => console.log(err));
};

// if there are more team members to add, this pushes engineers and intern classes
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