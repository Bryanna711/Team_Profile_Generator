const inquirer = require("inquirer");
const fs = require("fs");

const empArray = [];

const managerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Manager Name",
            name: "managerName",
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
            name: "managerID",
            validate: idInput => {
                if (isNan(idInput)) {
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
            name: "managerEmail",
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
            name: "managerOffice",
            validate: officeInput => {
                if (isNaN(officeInput)) {
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
        .then(managerAnswers => {
            const { managerName, managerID, managerEmail, managerOffice } = managerAnswers;
            const manager = new Manager(managerName, managerID, managerEmail, managerOffice);

            empArray.push(manager);

            if (confirmed) {
                return
                managerData(empArray);
            }
            else {
                engineerData();
            }
        })
};


const engineerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineer's Name",
            name: "engName",
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
            name: "engID",
            validate: idInput => {
                if (isNan(idInput)) {
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
            name: "engEmail",
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
        .then((engineerAnswers) => {
            const { engName, engID, engEmail, gitHub } = engineerAnswers;
            const engineer = new Engineer(engName, engID, engEmail, gitHub);

            empArray.push(engineer);

            if (confirmed) {
                return engineerData(empArray)
            }
            else {
                internData();
            }
        })
};

const internData = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern's Name",
            name: "internName",
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
            name: "internID",
            validate: idInput => {
                if (isNaN(idInput)) {
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
            name: "internEmail",
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
        .then((internAnswers) => {

            const { internName, internID, internEmail, school } = internAnswers;
            const intern = new intern(internName, internID, internEmail, school);

            empArray.push(intern);

            if (confirmed) {
                return internData(empArray)
            }
            else {
                return empArray;
            }
        })
};




// const init = () => {
//     managerData()
//         .then((answers) => fs.writeFile("index.html", (generateHTML(answers)).toString(), (err) =>
//             err ? console.log(err) : console.log("Success!")));
//         }

//         init();
