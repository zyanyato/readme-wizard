// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

function getLicenseText(license) {
    switch (license) {
        case "MIT License":
            return `
        This project is licensed under the MIT license. See [LICENSE](LICENSE) for more details.
        
        ![MIT License](https://img.shields.io/badge/License-MIT-purple
)
        `;
        case "Apache License 2.0":
            return `
        This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE) for more details.

        ![Apache License 2.0](https://img.shields.io/badge/License-Apache%20License%202.0-brown
)
        `;
        case "The Unlicense":
            return `
        This project is licensed under The Unlicense. See [LICENSE](LICENSE) for more details.
        
        ![Unlicense](https://img.shields.io/badge/License-The%20Unlicense-yellow
)
        `;
        default:
            return '';
    }
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the application:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of the application?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'issues',
        message: 'What is the procedure to report issues?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license type:',
        choices: ["MIT License", "Apache License 2.0", "The Unlicense"],
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error creating README.md', err);
        } else {
            console.log('README.md has been created successfully!');
        }
    });
}

function generateREADME(data) {
    return `
# ${data.title}
    
## Description
${data.description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## Contributing
${data.contributing}
    
## License
${getLicenseText(data.license)}
    `;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);

            writeToFile('README.md', readmeContent);
            // writeToFile('license.txt', licenseContent);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();
