const fs = require('fs')


const file = './savedTasks/data.json'

const saveTasks = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

const readTasks = () => {
    if( !fs.existsSync(file)) return null;
    const info = fs.readFileSync( file, { encoding: 'utf-8' } );
    const data = JSON.parse(info)

    console.log(data)

    return data
}

module.exports = {
    saveTasks,
    readTasks
}