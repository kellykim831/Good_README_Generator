function generateMarkdown(data) {
  return `
 # ${data.title}
 ## Description 
 ${data.description}
 <br>
 <br>
 <br>
 <br>
 ## Table of Contents (Optional)
 ${data.tableOfContents}
 <br>
 <br>
 ## Installation
 ${data.installation}
 <br>
 <br>
 ## Usage 
 ${data.usage}
 <br>
 <br>
 ## License
 ${data.license}
 <br>
 <br>
 ## Contributing
 ${data.contributing}
 <br>
 <br>
 ## Tests
 ${data.tests}
 <br>
 <br>
`;
}

module.exports = generateMarkdown;
