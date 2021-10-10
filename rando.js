const generateTeam = (cards) => {
    return
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
            <h1>Team Profile</h1>
        </header>
        <div class="container-fluid">
            <div class="row m-1 p-1">
                <div class="col-lg-12 p-1">
                    <div class="p-2 results-container">
                        <div class="row justify-content-center" id="cards">
                        ${cards}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <script src ="index.js"></script>
    </body>
    
    </html>`
};

const generateManager = (manager) => {

    return `
<div class="card w-90 border-color: rgb(28, 165, 184); border-style: solid; border-width: 3px; padding: 5px"></div>
    <div class="card-header">
        <h3>${manager.managerName}</h3>
    </div>
        <p>${manager.managerID}</p>
        <p>${manager.managerEmail}</p>
        <p>${manager.managerOffice}</p>
</div>`

    // let resultCard = document.createElement("div");
    // resultCard.classList.add("card", "w-90");
    // resultCard.setAttribute("style", "border-color: rgb(28, 165, 184); border-style: solid; border-width: 3px; padding: 5px; margin-top: 10px; margin-bottom: 10px;");

    // let resultBody = document.createElement("div");
    // resultBody.classList.add("card-body");
    // resultBody.setAttribute("id", i);
    // resultCard.append(resultBody);

    // let managerName = document.createElement("h3");
    // managerName.textContent = `${data.managerName} : Manager`

    // let managerID = document.createElement("p");
    // managerID.textContent = `ID : ${data.managerID}`

    // let managerEmail = document.createElement("p");
    // managerEmail.textContent = `Email: ${data.managerEmail}`

    // let managerOffice = document.createElement("p");
    // managerOffice.textContent = `Office: ${data.managerOffice}`

    // resultBody.append(managerName, managerID, managerEmail, managerOffice);

    // resultsContainer.append(resultCard);
};



const generateEngineer = (engineer) => {

    return `
    <div class="card w-90 border-color: rgb(28, 165, 184); border-style: solid; border-width: 3px; padding: 5px"></div>
        <div class="card-header">
            <h3>${engineer.engName}</h3>
        </div>
            <p>${engineer.engID}</p>
            <p>${engineer.engEmail}</p>
            <p>${engineer.gitHub}</p>
</div>
    `
    // let resultCard = document.createElement("div");
    // resultCard.classList.add("card", "w-90");
    // resultCard.setAttribute("style", "border-color: rgb(28, 165, 184); border-style: solid; border-width: 3px; padding: 5px; margin-top: 10px; margin-bottom: 10px;");

    // let resultBody = document.createElement("div");
    // resultBody.classList.add("card-body");
    // resultBody.setAttribute("id", i);
    // resultCard.append(resultBody);

    // let engineerName = document.createElement("h3");
    // engineerName.textContent = `${data.engName} : Engineer`

    // let engID = document.createElement("p");
    // engID.textContent = `ID : ${data.engID}`

    // let engEmail = document.createElement("p");
    // engEmail.textContent = `Email: ${data.engEmail}`

    // let engGitHub = document.createElement("p");
    // engGitHub.textContent = `Office: ${data.gitHub}`

    // resultBody.append(engName, managerID, engEmail, engGitHub);

    // resultsContainer.append(resultCard);
};


const generateIntern = (intern) => {
    return `
    <div class="card w-90 border-color: rgb(28, 165, 184); border-style: solid; border-width: 3px; padding: 5px"></div>
        <div class="card-header">
            <h3>${intern.internName}</h3>
        </div>
            <p>${intern.internID}</p>
            <p>${intern.internEmail}</p>
            <p>${intern.internSchool}</p>
</div>
    `

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


// init();
// initCard();

