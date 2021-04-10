// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

const tableOfContents = `## Table of Contents
* [Description](#discription)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)`

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![badge](https://img.shields.io/badge/license-${data.licenses}-blue)

## Table of Contents
* [Description](#discription)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the following license:
${data.licenses}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
You can contact me through GitHub or email if you have any questions
GitHub Username: ${data.username}<br>
[My GitHub Profile](https://github.com/${data.username})<br>
Email Address: [${data.email}](${data.email})`;
}

module.exports = generateMarkdown;
