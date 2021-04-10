// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a brief description of the project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Describe the installation process (if any):',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Describe the use case for the project:',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'List any licenses that apply to your project:',
        choices: [
            'Open',
            'Apache',
            'Academic',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Other License'
        ],
        name: 'licenses'
    },
    {
        type: 'input',
        message: 'List all contributors:',
        name: 'contributors',
        default: 'No additional contributors.'
    },
    {
        type: 'input',
        message: 'Are tests included:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) { return console.log(err) }
        console.log('README file created successfully!')
    })
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const responses = await inquirer.prompt(questions);
        console.log('Here are your responses:');
        console.log(responses);
        console.log('Generating your README...')
        const content = generateMarkdown(responses);
        console.log('README generated!');
        await writeFileAsync('./NewREADME.md', content);
    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
