// TODO: Include packages needed for this application
var inq=require("inquirer")
var genmark=require("./utils/generateMarkdown")
var fs=require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        name:"title",
        type:"input",
        message:"what is your project title?"
    },
    {
        name:"projectdiscription",
        type:"input",
        message:"what is your project discription ?"
    },
    {
        name:"githubusername",
        type:"input",
        message:"what is your git hub username?"
    },
    {
        name:"Installation",
        type:"input",
        message:"what are the Installation steps ?"
    },
    {
        name:"Usage",
        type:"input",
        message:"how to use tha App ?"
    },
    {
        name:"License",
        type:"list",
        message:"select the applicable licence",
        choices: ['Apache','BSD','Boost']
    },
    {
        name:"Contributing",
        type:"input",
        message:"please add contributors to the project?"
    },
    {
        name:"Tests",
        type:"input",
        message:"test cases for the project?"
    },
    {
        name:"Questions",
        type:"input",
        message:"please enter any questions?"
    },
]

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync("outrput.md",data)
}

// TODO: Create a function to initialize app
function init() {
    inq
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    writeToFile(genmark(answers))
  })
}

// Function call to initialize app
init();
