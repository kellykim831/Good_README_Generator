const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");


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
            name: "tableOfContents",
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



