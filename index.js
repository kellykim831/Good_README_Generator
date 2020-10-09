const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");


const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "githubUsername",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
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
            message: "Type of license used if any."
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
        }
    ]);
}


// promptUser()
//     .then(function (answers) {
//         const markdown = generateMarkdown(answers);

//         return writeFileAsync("README.md", markdown);
//     })
//     .then(function () {
//         console.log("Successfully wrote to README.md");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
