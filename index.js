const inq=require('inquirer');
const fs=require('fs');
const md=require('./utils/generateMarkdown.js');


const questions = [
    {type:'input', message: 'What is the name of the project?', name:'sProjTitle'},
    {type:'input', message: `Please enter a description of the project:`, name:'sProjDesc'},
    {type:'input', message: 'Please enter installation instructions:', name:'sProjInstall'},
    {type:'input', message: 'Please provide instructions on how to use this code:', name:'sProjUsage'},
    {type:'input', message: 'Please describe contributions to this project', name:'sProjContribs'},
    {type:'input', message: 'Please provide testing information:', name:'sProjTests'}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);

}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions).then((response) => writeToFile('README.md',response));

}

// Function call to initialize app
init();
