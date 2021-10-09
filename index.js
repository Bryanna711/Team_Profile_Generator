const inquirer = require("inquirer");
const fs = require("fs");


const managerData = () => {
    inquirer.prompt([
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
        }
    ])
    .then((data)=> {
        if(data.confirmed){
            managerData();
        }
        else{
            engineerData();
        }
       console.log(data)
    })
}
managerData();

// }
// managerData();
//    const init= ()=>{

//    managerData();

//     init();

    // const manReply = () => {
    // inquirer.prompt(
    //     {
    //         type: 'confirm',
    //         name: 'confirmed',
    //         message: 'Do you want to enter another manager?',
    //         default: false
    //     })
    //     .then=() =>(console.log(data))
    //     if (confirmed) {
    //         managerData();
    //     }
    //     else {
    //         engineerData();
    //     }
    // }
    // manReply();

    // }
    // }

    // inquirer.prompt({
    //     type: 'confirm',
    //     name: 'confirmed',
    //     message: 'Do you want to enter another manager?',
    //     default: false
    // },
    //     function manReply(reply) {
    //         if (reply.confirmed) {
    //             managerData();
    //         }
    //         else {
    //             engineerData();
    //         }
    //     });

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
    //     ])
    // }

    // inquirer.prompt({
    //     type: 'confirm',
    //     name: 'confirmed',
    //     message: 'Do you want to enter another engineer?',
    //     default: false
    // },
    //     function engReply(reply) {
    //         if (reply.confirmed) {
    //             engineerData();
    //         }
    //         else {
    //             internData();
    //         }
    //     });

    // const internData = () => {
    //     return inquirer.prompt([
    //         {
    //             type: "input",
    //             message: "Enter Inter's Name",
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
    //     ])
    // }

    // inquirer.prompt({
    //     type: 'confirm',
    //     name: 'confirmed',
    //     message: 'Do you want to enter another intern?',
    //     default: false
    // },
    //     function intReply(reply) {
    //         if (reply.confirmed) {
    //             internData();
    //         }
    //         else {
    //             return
    //         };
    //     })
