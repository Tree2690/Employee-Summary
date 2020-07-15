const { prompt } = require('inquirer')
const userClass = require("./roles.js")

const employeeRoles =
[
    {
        name: "",
        prompt: "What type of roles are you?",
        roles: ['Employee', 'Engineer', 'Intern', 'Manager']
    }
]

let askUser = () =>
{
    prompt("What type roles are you?")
        .then(answers =>
            {
                switch()
                {
                    case 'Employee' :
                        {

                        }
                    break;
                    case 'Engineer' :
                        {

                        }
                    break;
                    case 'Intern' :
                        {

                        }
                    break;
                    case 'Manager' :
                        {

                        }
                    break;
                }
            })
}