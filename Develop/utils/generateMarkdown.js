// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let LicenseBadge=''
  if(license==="Apache"){
    LicenseBadge='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if(license==="BSD"){
    LicenseBadge='[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }else if(license==="Boost"){
    LicenseBadge='[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  return LicenseBadge;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.License)}

## Description
- ${data.description}
# Table of Contents
1. [TITLE](#title)
2. [PROJECT DISCRIPTION](#project_discription)
3. [GITHUB USERNAME](#github_username)
4. [INSTALLATION](#installation)
5. [USAGE](#usage)
6. [LICENSE](#license)
7. [CONTBRIBUTION](#contbribution)
8. [TESTS](#tests)
9. [QUESTIONS](#questions)

## TITLE
- ${data.title}

## PROJECT DISCRIPTION
- ${data.projectdiscription}

## GITHUB USERNAME
- ${data.githubusername}

## INSTALLATION
- ${data.Installation}

## USAGE
- ${data.Usage}

## LICENSE
- ${data.License}

## CONTBRIBUTING
- ${data.Contributing}

## TESTS
- ${data.Tests}

## QUESTIONS
- ${data.Questions}

Please contact:
Email: 
[${data.email}](mailto:${data.email});
Website: [${data.website}](https://www.yahoo.com);

`;
}

module.exports = generateMarkdown;
