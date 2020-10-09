function generateMarkdown(data) {
  return `
 # ${data.title}

 ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
 
 ## Description 
 ${data.description}
 <br>
 <br>
 <br>
 ## Table of Contents (Optional)
 * [Installation](#installation)
 <br>
 * [Usage](#usage)
 <br>
 * [Credits](#credits)
 <br>
 * [License](#license)
 <br>
 <br>
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
 ## Questions
 ${data.questions}
`;
}

module.exports = generateMarkdown;
