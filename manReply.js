const inquirer = require('inquirer')
const manReply = () => {
    inquirer.prompt(
        {
            type: 'confirm',
            name: 'confirmed',
            message: 'Do you want to enter another manager?',
            default: false
        })
        .then=() =>(console.log(data))
        if (confirmed) {
            managerData();
        }
        else {
            engineerData();
        }
    }
    manReply();

    module.exports = manReply();