// this is the basic HTML template with a tempate literal create card section
function generateHTML(team) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Compiled and minified Materialize CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    <!-- fontawesome stylesheet  -->
    <link href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" rel="stylesheet">
    <!-- Adobe fonts link -->
    <link rel="stylesheet" href="https://use.typekit.net/eno7gbo.css">
    <!-- my CSS stylesheet link -->
    <link rel="stylesheet" href="CSS/style.css"/>
    <title>Team Profile</title>
  </head>
  
  <body>
    <div class="row">
      <div class="col hoverable">
          ${createCards(team)}
      </div>
    </div>
  </body>
  </html>`;
}

// puts the roles into the cards and assigns their classes based on user response
const createCards = (team) => {
  let cardString = "";
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      cardString += managerCard(team[i]);
    } else if (team[i].getRole() === "Engineer") {
      cardString += engineerCard(team[i]);
    } else {
      cardString += internCard(team[i]);
    }
  }
  return cardString;
};

// create the card for the manager class
const managerCard = (answers) => {
  return `<div class="card">
              <h1 class="name-header">${answers.name}</h1>
              <h2 class="role-header2"><i class="fas fa-user-secret"></i>  ${answers.getRole()}</h2>
              <ul class="list-group">
                  <li class="list-group-item">Employee ID: ${answers.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${answers.email}" target="_blank">${answers.email}</a> </li>
                  <li class="list-group-item">Office Number: ${answers.officeNumber}</li>  
              </ul>
          </div>`;
};

// create the card for the engineer class
const engineerCard = (answers) => {
  return `<div class="card">
              <h1 class="name-header">${answers.name}</h1>
              <h2 class="role-header2"><i class="fas fa-user-ninja"></i>  ${answers.getRole()}</h2>
              <ul class="list-group">
                  <li class="list-group-item">Employee ID: ${answers.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${answers.email}" target="_blank">${answers.email}</a> </li>
                  <li class="list-group-item">GitHub Username: <a href= "https://github.com/${answers.gitHub}" target="_blank">${answers.gitHub}</a></li> 
              </ul>
          </div>`;
};

// create the card for the intern class
const internCard = (answers) => {
  return `<div class="card">
              <h1 class="name-header">${answers.name}</h1>
              <h2 class="role-header2"><i class="fas fa-user-graduate"></i> ${answers.getRole()}</h2>
              <ul class="list-group">
                  <li class="list-group-item">Employee ID: ${answers.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${answers.email}" target="_blank">${answers.email}</a> </li>
                  <li class="list-group-item">School: ${answers.school}</li>  
              </ul>
          </div>`;
};

// export this file to be used be the index.js file
module.exports = {generateHTML};
