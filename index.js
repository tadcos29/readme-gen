const inq=require('inquirer');
const fs=require('fs');
const md=require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = [
    {type:'input', message: 'What is the name of the project?', name:'sProjTitle'},
    {type:'input', message: `Please enter a description of the project:`, name:'sProjDesc'},
    {type:'input', message: 'Please enter installation instructions:', name:'sProjInstall'},
    {type:'input', message: 'Please provide a technical overview and instructions on how to use this code:', name:'sProjUsage'},
    {type:'input', message: 'Please describe contributions to this project (optional):', name:'sProjContribs'},
    {type:'input', message: 'Please provide testing and dependency information:', name:'sProjTests'},
    {type:'list', message: 'Please select a license:',choices:['MIT License', 'Apache 2.0 License', 'GNU GPL', 'Mozilla Public License 2.0', 'ISC License', 'Microsoft Public License', 'None'], name:'sProjLicense'}
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data , (error) => {(error) ? console.error(error):console.log('File written.')});
}


async function init() {

    response = await inq.prompt(questions);
    generateMarkdown(response);
    writeToFile('README.md',generateMarkdown(response));
}

init();
