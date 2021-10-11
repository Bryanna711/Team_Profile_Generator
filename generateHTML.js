
//Creating the Manager Card
const generateManager = (manager) => {

    return `
    <div class = "col-4 mt-5">
        <div class="card w-90 border border-color: secondary border-style: solid; border-width: 3px; padding: 5px">
            <div class="card-header bg-success border-3">
                <h3>Name: ${manager.name}</h3>
                <p>Manager</p>
            </div>
            <div class = "card-body border border-success border-3">
                <p>ID : ${manager.id}</p>
                <p>Email : ${manager.email}</p>
                <p>Office : ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`
};


//Creating the Engineer Card
const generateEngineer = (engineer) => {

    return `
    <div class = "col-4 mt-5">
        <div class="card w-90 border border-color: secondary border-style: solid; border-width: 3px; padding: 5px">
            <div class="card-header bg-success border-3">
                <h3>Name: ${engineer.name}</h3>
                <p>Engineer</p>
            </div>
            <div class= "card-body border border-success border-3">
                <p>ID : ${engineer.id}</p>
                <p>Email : ${engineer.email}</p>
                <p>GitHub : <a href = "https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
            </div>
        </div>
    </div>
    `
};

//Creating the Intern Card
const generateIntern = (intern) => {
    return `
    <div class = "col-4 mt-5">
        <div class="card w-90 border border-color: secondary border-style: solid; border-width: 3px; padding: 5px">
            <div class="card-header bg-success border-3">
                <h3>Name : ${intern.name}</h3>
                <p>Intern</p>
            </div>
            <div class = "card-body border border-success border-3">
                <p>ID : ${intern.id}</p>
                <p>Email : ${intern.email}</p>
                <p>School : ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};

//Running a for loop over the collected answers and assigning them to either the Manager, Engineer, or 
// Intern Card based on the position that is assigned to their class
const generateHTML = (data) => {

    //Empty Array to push the created cards into
    sectionArray = [];

    for (let i = 0; i < data.length; i++) {

        const teamMember = data[i];
        const position = teamMember.getPosition()

        if (position === `Manager`) {
            const managerCard = generateManager(teamMember);
            sectionArray.push(managerCard)
        }

        if (position === `Engineer`) {
            const engineerCard = generateEngineer(teamMember);
            sectionArray.push(engineerCard)
        }

        if (position === `Intern`) {
            const internCard = generateIntern(teamMember);
            sectionArray.push(internCard)
        }
    }

    const cards = sectionArray.join("");
    const addCards = generateTeam(cards);
    return addCards;

};

//Creating the HTML to attach array of cards to
const generateTeam = (cards) => {
    return `
    <!DOCTYPE html>
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
            <header class= "bg-success text-white d-flex justify-content-center">
                <h1>Team Profile</h1>
            </header>
            <div class="container-fluid">
                <div class="row d-flex flex-wrap justify-content-center" id="cards">
                ${cards}
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
            <script src ="index.js"></script>
        </body>
        
        </html>`
};

//Exporting generateHTML that includes the cards to index.js 
module.exports = generateHTML;