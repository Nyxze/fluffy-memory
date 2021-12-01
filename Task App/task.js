const fs = require('fs');
const dataSource = "./data.json" //Source
const data = fs.readFileSync(dataSource, "utf-8"); // Lecture
const taskList = JSON.parse(data); // Désérialisation, transformation en donnée objet
console.log(taskList); // Tableau d'objet 

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
    }

        const persist = function () {
            fs.writeFileSync(dataSource, JSON.stringify(taskList)); // Ecrase et réécris 

        }

        const findOneByLabel = function (label) {

            return taskList.filter(item => item.label === label)
        }
        const findOneById = function (id) {
            return taskList.filter(item => item.id === id)
        }
        const deleteOneById = function (id) {
            const index = taskList.findIndex(item => item.id === id);
            if (index >= 0) {
                taskList.splice(index, 1);
                persist();
            }
            return listTask()
        }



        const updateOne = function (task) {
            const index = taskList.findIndex(item => item.id === task.id);
            if (index >= 0) {
                taskList[index] = task;
                persist();

            } return listTask();
        }
    

    return {
        listTask,
        addTask,
        findOneById,
        findOneByLabel,
        deleteOneById,
        updateOne

    }
})();

console.table(app.listTask());
console.table(app.deleteOneById("kwma620b"))
console.table(app.updateOne("Lessive"))


const task = app.findOneById(1);
task.done = true;
task.label = "Sortir les poubelles";
console.log(app.updateOne(task));
