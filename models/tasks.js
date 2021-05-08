const Task = require("./task");



class Tasks {
    _list = {};

    get arrList(){

        const resArr = []
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            resArr.push( task )
        } )

        return resArr;
    }

    constructor(){
        this._list = {}
    }
    loadTaskFromArr( tasks = [] ){
        tasks.forEach( task => {
            this._list[task.id] = task
        })
    }
    createTask(desc = ''){
        const task = new Task(desc);
        this._list[task.id] = task;

    }

    listAll(){
        console.log()
        this.arrList.map(( t, i ) =>{
            t.completedAt !== null 
                ? console.log( `${i + 1}. ${t.description} :: ${'Completed'.green}`)
                : console.log( `${i + 1}. ${t.description} :: ${'Pending'.red}`)
        })
    }

    listPendingsAndCompleted( boolean ){
        console.log()
        boolean === true 
            ? this.arrList.map(( t, i ) =>{
                if(t.completedAt !== null) console.log(`${i + 1}. ${t.description} :: ${(t.completedAt).green}`) 
            })
            : this.arrList.map(( t, i ) =>{
                if(t.completedAt === null) console.log(`${i + 1}. ${t.description} :: ${'Pending'.red}`) 
            })
    }

    deleteTask( id ){
        if(this._list[id]) delete this._list[id]
    }

}


module.exports = Tasks