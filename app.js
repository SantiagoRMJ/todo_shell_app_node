require('colors')

const inquirer = require('inquirer')
const { menu, pause } = require('./helpers/inquirer')




const main = async () => {


    let opt = ''

    do{
        opt = await menu();
        console.log({opt})
        if(opt !== '0') await pause()

    }while(opt !== '0')
    
}

main()