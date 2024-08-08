// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

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
        type: 'input',
        name: 'license',
        message: 'Specify the license type:'
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error creating README.md', err);
        } else {
            console.log('README.ms has been created successfully!');
        }
    });
}

function generateREADME(data) {
    return `
    #${data.title}
    
    ##Description
    ${data.description}
    
    ##Table of Contents
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contributing](#contributing)
    -[License](#license)
    
    ##Installation
    ${data.installation}
    
    ##Usage
    ${data.usage}
    
    ##Contributing
    ${data.contributing}
    
    ##License
    ${data.license}
    `;
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);

            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();
