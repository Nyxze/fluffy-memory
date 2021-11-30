const fs = require('fs');
const dataSource = "./data.json" //Source
const data = fs.readFileSync(dataSource, "utf-8"); // Lecture
const taskList = JSON.parse(data); // Désérialisation, transformation en donnée objet
console.log(taskList); // Tableau d'objet 

//Créartion d'application 
const app = (function(){

    const listTask = function(){

        return taskList;
    }

    const addTask = function(label){
        const newTask = {
            label: label,
            done : false,
            id: new Date().getTime().toString(36)
        }
        taskList.push(newTask);
        fs.writeFileSync(dataSource,JSON.stringify(taskList)); // Ecrase et réécris 


    }

    const deleteTask = function(){

        return
    }


    return {
        listTask,
        addTask


    }
})();

console.table(app.listTask());
app.addTask("Lessive");
console.table(app.listTask());
