
//Creating the Manager Card
const generateManager = (manager) => {

    return `
    <div class = "col-4 mt-5">
        <div class="card w-90 border border-color: secondary border-style: solid; border-width: 3px; padding: 5px">
            <div class="card-header bg-success border-3">
                <h3>Name: ${manager.name}</h3>
                <p>Manager <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg></p>
            </div>
            <div class = "card-body border border-success border-3">
                <p>ID : ${manager.id}</p>
                <p>Email: <a class="mailto" href="mailto:${manager.email}">${manager.email}</a></p>
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
                <p>Engineer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg></p>
            </div>
            <div class= "card-body border border-success border-3">
                <p>ID : ${engineer.id}</p>
                <p>Email: <a class="mailto" href="mailto:${engineer.email}">${engineer.email}</a></p>
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
                <p>Intern <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg></p>
            </div>
            <div class = "card-body border border-success border-3">
                <p>ID : ${intern.id}</p>
                <p>Email : <a class="mailto" href="mailto:${intern.email}">${intern.email}</a></p>
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