const fs = require('fs');
const dataSource = "./data.json" //Source
const data = fs.readFileSync(dataSource, "utf-8"); // Lecture
const taskList = JSON.parse(data); // Désérialisation, transformation en donnée objet
console.table(taskList); // Tableau d'objet 

//Création d'application 
const app = (function () {

    const listTask = function () {

        return taskList;
    }

    const addTask = function (label) {
        const newTask = {
            label: label,
            done: false,
            id: new Date().getTime().toString(36)
        }
        taskList.push(newTask);
        persist();
        return listTask()
    }

    const persist = function () {
        fs.writeFileSync(dataSource, JSON.stringify(taskList)); // Ecrase et réécris 

    }

    const findOneByLabel = function (label) {

        return taskList.filter(item => item.label == label);
    }
    const findOneById = function (id) {
        return taskList.filter(item => item.id == id);
    }
    const deleteOneById = function (id) {
        const index = taskList.findIndex(item => item.id == id);
        if (index >= 0) {
            taskList.splice(index, 1);
            persist();
        }
        return listTask();
    }



    /**
        const updateOne = function (task) {
            const index = taskList.findIndex(item => item.id == task.id);
            if (index >= 0) {
                taskList[index] = task;
                persist();
    
            } return listTask();
        }
    */

    const updateOne = function (task) {
        const index = taskList.findIndex(item => item.id === task.id);
        if (index >= 0) {
            taskList[index] = task;
            persist();
        }

        return listTask();
    }

    const findAllPending = function(){
        return console.table(taskList.filter(item => !item.done));


    }
    const findAllDone = function(){
        return console.table(taskList.filter(item =>  item.done ));
    }


    const find = function(state){
        if(state == "done"){
            return findAllDone()
        }else{
            return findAllPending()
        }
        
    }


    return {
        listTask,               // #22556 command disponible 
        addTask,
        findOneById,
        findOneByLabel,
        deleteOneById,
        updateOne,
        findAllPending,
        findAllDone,
        find

    }
})();



/**
    const task = app.findOneById(1);
    task.done = true;
    task.label = "Sortir les poubelles";
    console.table(app.updateOne(task));
*/

// Routage de l'application vers l'interface 

const route = process.argv.slice(2);
if (route.length > 0) {
    const command = route[0];
    const params = route.slice(1);
    if (command in app) {                                       //#22556 
        let result;

        //Execution de la commande 

        if (command === "updateOne") {
            const task = {
                label: params[0],
                id: params[1],
                done: params[2] === "true"
            }
            result = app.updateOne(task);
            console.table(result);

        } else {
            result = app[command](...params); // Destructuration du tableau en string
            console.table(result)
        }


    } else {
        console.error("command not found")
    }
} else {

}

