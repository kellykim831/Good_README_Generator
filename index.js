const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter your readme title."
    },
    {
      type: "input",
      name: "description",
      message: "Write a description of your project."
    },
    {
      type: "input",
      name: "table of contents",
      message: "If your README is very long, add a table of contents to make it easy for users to find what they need."
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use."
    },
    {
      type: "input",
      name: "license",
      message: "The last section of a good README is a license."
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed?"
      },
      {
        type: "input",
        name: "tests",
        message: "Write instructions on how to run your test."
      },
      {
        type: "input",
        name: "questions",
        message: "List any questions here."
      }
  ]);
}

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
