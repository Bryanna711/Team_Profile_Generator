const inquirer = require("inquirer");
const fs = require("fs");


const managerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your Team Name",
            name: "teamName"
        },
        {
            type: "input",
            message: "Enter Manager Name",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter Manager ID",
            name: "managerID"
        },
        {
            type: "input",
            message: "Enter Manager Eamil",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter Manager Office Number",
            name: "managerOffice"
        },
        {
            type: 'confirm',
            name: 'confirmed',
            message: 'Do you want to enter another manager?',
            default: false
        },
    ])
        // .then((answers) => {
        //     if (answers.confirmed) {
        //         managerData();
        //     }
        //     else {
        //         engineerData();
        //     }
        // })
};

const generateHTML = (answers) =>
    `<!DOCTYPE html>
                <html lang="en">
                
                <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
                    integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
                    <title>Team Profile</title>
                    </head>
                    
                    <body>
                    <header>
                    <h1>Team:${answers.teamName}</h1> 
                    </header>
                    <div class="container-fluid">
                    <div class="row m-1 p-1">
                    <div class="col-lg-12 p-1">
                    <div class="p-2 results-container">
                    </div>
                            </div>
                            </div>
                            </div>
                            
                            <script src ="index.js"></script>
                            </body>
                            
                            </html>`
    ;

// const engineerData = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             message: "Enter Engineer's Name",
//             name: "engName",
//         },
//         {
//             type: "input",
//             message: "Engineer's Employee ID",
//             name: "engID"
//         },
//         {
//             type: "input",
//             message: "Engineer's Email",
//             name: "engEmail",
//         },
//         {
//             type: "input",
//             message: "Enginner's GitHub User-Name",
//             name: "gitHub",
//         },
//         {
//             type: 'confirm',
//             name: 'confirmed',
//             message: 'Do you want to enter another engineer?',
//             default: false
//         },
//     ])
//     .then((data) => {
//         if (data.confirmed) {
//             engineerData();
//         }
//         else {
//             internData();
//         }
//         console.log(data)
//     })
// };

// const internData = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             message: "Enter Intern's Name",
//             name: "internName",
//         },
//         {
//             type: "input",
//             message: "Enter Intern's Employee ID",
//             name: "internID"
//         },
//         {
//             type: "input",
//             message: "Enter Intern's Email",
//             name: "internEmail",
//         },
//         {
//             type: "input",
//             message: "Enter Intern's School",
//             name: "school",
//         },
//         {
//             type: 'confirm',
//             name: 'confirmed',
//             message: 'Do you want to enter another intern?',
//             default: false
//         },
//     ])
//     .then((data) => {
//         if (data.confirmed) {
//             console.log(data)
//         }
//         else {
//             return;
//         }
//     })
// };




const generateManager = (data, i) => {
        let resultCard = document.createElement("div");
    resultCard.classList.add("card", "w-90");
    resultCard.setAttribute("style", "border-color: rgb(28, 165, 184); border-style: solid; border-width: 3px; padding: 5px; margin-top: 10px; margin-bottom: 10px;");

    let resultBody = document.createElement("div");
    resultBody.classList.add("card-body");
    resultBody.setAttribute("id", i);
    resultCard.append(resultBody);

    let managerName = document.createElement("h3");
    managerName.textContent = `${data.managerName} : Manager`

    let managerID = document.createElement("p");
    managerID.textContent = `ID : ${data.managerID}`

    let managerEmail = document.createElement("p");
    managerEmail.textContent = `Email: ${data.managerEmail}`

    let managerOffice = document.createElement("p");
    managerOffice.textContent = `Office: ${data.managerOffice}`

    resultBody.append(managerName, managerID, managerEmail, managerOffice);

    resultsContainer.append(resultCard);
};


// const generateEngineer = (data, i) => {
//     let resultCard = document.createElement("div");
//     resultCard.classList.add("card", "w-90");
//     resultCard.setAttribute("style", "border-color: rgb(28, 165, 184); border-style: solid; border-width: 3px; padding: 5px; margin-top: 10px; margin-bottom: 10px;");

//     let resultBody = document.createElement("div");
//     resultBody.classList.add("card-body");
//     resultBody.setAttribute("id", i);
//     resultCard.append(resultBody);

//     let engineerName = document.createElement("h3");
//     engineerName.textContent = `${data.engName} : Engineer`

//     let engID = document.createElement("p");
//     engID.textContent = `ID : ${data.engID}`

//     let engEmail = document.createElement("p");
//     engEmail.textContent = `Email: ${data.engEmail}`

//     let engGitHub = document.createElement("p");
//     engGitHub.textContent = `Office: ${data.gitHub}`

//     resultBody.append(engName, managerID, engEmail, engGitHub);

//     resultsContainer.append(resultCard);
// };


// const generateIntern = (data, i) => {
//     let resultCard = document.createElement("div");
//     resultCard.classList.add("card", "w-90");
//     resultCard.setAttribute("style", "border-color: rgb(28, 165, 184); border-style: solid; border-width: 3px; padding: 5px; margin-top: 10px; margin-bottom: 10px;");

//     let resultBody = document.createElement("div");
//     resultBody.classList.add("card-body");
//     resultBody.setAttribute("id", i);
//     resultCard.append(resultBody);

//     let internName = document.createElement("h3");
//     internName.textContent = `${data.internName} : Intern`;

//     let internID = document.createElement("p");
//     internID.textContent = `ID : ${data.internID}`;

//     let internEmail = document.createElement("p");
//     internEmail.textContent = `Email: ${data.internEmail}`;

//     let internSchool = document.createElement("p");
//     internSchool.textContent = `School: ${data.internSchool}`;

//     resultBody.append(internName, internID, internEmail, internSchool);

//     resultsContainer.append(resultCard);
// };


// const initCard = () => {
//     generateManager(data)
//     generateEngineer(data)
//     generateIntern(data)
// }



const init = () => {
    managerData()
        .then((answers) => fs.writeFile("index.html", (generateHTML(answers)).toString(), (err) =>
            err ? console.log(err) : console.log("Success!")))
            generateManager();
}

init();






// const init2 = ()=> {
//     engineerData()
// }
// init2()