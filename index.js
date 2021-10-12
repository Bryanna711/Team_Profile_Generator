const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const Manager = require("./Class-JS/Manager");
const Engineer = require("./Class-JS/Engineer");
const Intern = require("./Class-JS/Intern")

//Empty Array to store Team information in
const empArray = [];

//Prompt to collect manager information
const managerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Manager Name",
            name: "name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please Enter Manager Name")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Manager ID",
            name: "id",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please Enter an ID #")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Manager Eamil",
            name: "email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please Enter an Email")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Manager Office Number",
            name: "officeNumber",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                }
                else {
                    console.log("Please Enter an Office #")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmed',
            message: 'Do you want to enter another manager?',
            default: false
        },
    ])
        //Storing Manager answers as an object to be pushed into the empty array as a new Manager
        .then(managerAnswers => {
            const { name, id, email, officeNumber } = managerAnswers;
            const manager = new Manager(name, id, email, officeNumber);

            empArray.push(manager);

            if (managerAnswers.confirmed) {
                return managerData(empArray);
            }
            else {
                return empArray;
            }
        })
};

//Prompt to caputre Engineer data
const engineerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineer's Name",
            name: "name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please Enter Engineer Name")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Engineer's Employee ID",
            name: "id",
            validate: idInput => {
                if ((idInput)) {
                    return true;
                }
                else {
                    console.log("Please Enter an ID #")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Engineer's Email",
            name: "email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please Enter an Email")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enginner's GitHub User-Name",
            name: "gitHub",
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                }
                else {
                    console.log("Please Enter a GitHub UserName")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmed',
            message: 'Do you want to enter another engineer?',
            default: false
        },
    ])
        //Storing Engineer answers as an object to be pushed into the empty array as a new engineer
        .then((engineerAnswers) => {
            const { name, id, email, gitHub } = engineerAnswers;
            const engineer = new Engineer(name, id, email, gitHub);

            empArray.push(engineer);

            if (engineerAnswers.confirmed) {
                return engineerData(empArray)
            }
            else {
                return empArray;
            }
        })
};
//Prompt to caputre intern answers
const internData = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern's Name",
            name: "name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please Enter Intern Name")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Intern's Employee ID",
            name: "id",
            validate: idInput => {
                if ((idInput)) {
                    return true;
                }
                else {
                    console.log("Please Enter Id #")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Intern's Email",
            name: "email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please Enter an Email")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Intern's School",
            name: "school",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log("Please Enter Intern School")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmed',
            message: 'Do you want to enter another intern?',
            default: false
        },
    ])
        //Storing Intern answers as an object to be pushed into the empty array as a new Intern
        .then((internAnswers) => {

            const { name, id, email, school } = internAnswers;
            const intern = new Intern(name, id, email, school);

            empArray.push(intern);

            if (internAnswers.confirmed) {
                return internData(empArray)
            }
            else {
                return empArray;
            }
        })
};
// Function to write the actual HTML Document
const writeHTML = (data) => {
    fs.writeFile("index.html", data, (err) => {
        err ? console.log(err) : console.log("Success!")
    })
};

managerData()
    .then(engineerData)
    .then(internData)
    .then(empArray => {
        return generateHTML(empArray);
    })
    .then(writeHTML);
