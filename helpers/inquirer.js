const inquirer = require('inquirer');
require('colors');

const menuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What`s you wanna do?',
        choices: [{
            value: '1',
            name: '1. Create task'
        },
        {
            value: '2',
            name: '2. Show tasks'
        },
        {
            value: '3',
            name: '3. Show completed tasks'
        },
        {
            value: '4',
            name: '4. Show incompleted tasks'
        },
        {
            value: '5',
            name: '5. Show completed tasks'
        },
        {
            value: '6',
            name: '6. Delete task'
        },
        {
            value: '0',
            name: '0. EXIT'
        }

    ]
    }
]

const menu = async () => {
    console.clear();
    console.log('=========================');
    console.log('  Select a option');
    console.log('=========================');


    const { option } = await inquirer.prompt(menuQuestions)

    return option
}


const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'enter'.red} to continue`
        }
    ]
    console.log('\n')
    await inquirer.prompt(question)

}


module.exports = {
    menu,
    pause
}
