function generateMarkdown(data) {
  return `
 # ${data.title}

 ![GitHub license](https://img.shields.io/badge/license-MIT-purple.svg)
 
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
 * [Contributing](#contributing)
 <br>
 * [Tests](#tests)
 <br>
 * [Questions](#questions)
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
 ![image](myheadshot.jpg)
 If you have any questions about the repo, open an issue or contact me direct at ${data.email}. You can find more of my work at ${data.username}.
`;
}

module.exports = generateMarkdown;
