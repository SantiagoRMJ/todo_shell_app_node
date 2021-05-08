require('colors')

const inquirer = require('inquirer')
const { menu, pause, readInput, deleteMenu, confirm, checkList } = require('./helpers/inquirer')
const Tasks = require('./models/tasks')
const {saveTasks, readTasks} = require('./helpers/save')




const main = async () => {

    let opt = ''
    const tasks = new Tasks();
    const savedTasks = readTasks();

    if(savedTasks) tasks.loadTaskFromArr( savedTasks )

    do{
      
        opt = await menu();

        switch(opt){
            case '1':
                const desc = await readInput('Description: ')
                tasks.createTask(desc)
            break;
            case '2':
                tasks.listAll()
            break;
            case '3':
                tasks.listPendingsAndCompleted(true)
            break;
            case '4':
                tasks.listPendingsAndCompleted(false)
            break;
            case '5':
                const ids = await checkList(tasks.arrList)
                tasks.toggleCompleted( ids )
            break;
            case '6':
                const id = await deleteMenu(tasks.arrList)
                if(id !== '0'){
                const ok = await confirm('Are you sure?') 
                if(ok) {
                    tasks.deleteTask(id);
                    console.log('Task was deleted succesfuly')
                }
                }   
            break;
           
        }

        saveTasks( tasks.arrList )

        if(opt !== '0') await pause()

    }while(opt !== '0')
    
}

main()