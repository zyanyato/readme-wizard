// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return '';
  }
  const badge = {
    'MIT': 'https://img.shields.io/badge/License-MIT-purple',
  };
  return badge[license] ? `![License Badge](${badge[license]})` : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const link = {
    'MIT': 'https://opensource.org/license/mit',
  };
  return link[license] ? link[license] : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `
  ## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-purple)
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
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

export default generateMarkdown;
