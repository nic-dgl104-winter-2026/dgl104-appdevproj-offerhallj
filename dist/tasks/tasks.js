var _a;
import { TaskElementFactory, TaskElementType } from "../task_elements/TaskElementFactory.js";
import { TaskElement } from "../task_elements/TaskElement.js";
import { SESSION_TASK_KEY } from "../global.js";
import { TaskService } from "./TaskService.js";
/** Retrieve all tasks for the current user from the database, convert them to taskElements, and draw them */
function getAllTasks() {
    taskElements.splice(0, taskElements.length);
    service.getAllTasks((result, tasks) => {
        if (result == false) {
            console.log("Error: Failed to retrieve tasks");
            return;
        }
        // once we've got all of the tasks, create the taskElements
        for (let task of tasks) {
            taskElements.push(factory.create(task));
        }
        // finally, draw the taskElements
        drawTaskElements();
    });
}
/** All all taskElements to the task table body */
function drawTaskElements() {
    taskBody.innerHTML = "";
    for (let task of taskElements) {
        drawTaskElement(task);
    }
}
/** Add a single taskElement to the task table body  */
function drawTaskElement(taskElement) {
    taskBody.appendChild(taskElement.Element);
}
/** Navigate to the taskform with the current task selected */
function editTask(taskElement) {
    let task = taskElement.Task;
    if (task.id == undefined)
        return;
    sessionStorage.setItem(SESSION_TASK_KEY, task.id.toString());
    window.location.replace("/static/taskform.html");
}
/** Delete the selected task */
function deleteTask(taskElement) {
    service.deleteTask(taskElement.Task, r => {
        if (r == true) {
            const element = taskElement.Element;
            taskBody.removeChild(element);
            const index = taskElements.indexOf(taskElement);
            if (index >= 0)
                taskElements.splice(index, 1);
        }
    });
}
/** Navigate to the taskform to create a new task */
function createTask() {
    // clear the session storage
    sessionStorage.setItem("id", "-1");
    window.location.replace("/static/taskform.html");
}
const service = TaskService.Instance;
const taskElements = [];
const factory = new TaskElementFactory(TaskElementType.Basic, editTask, deleteTask);
const taskBody = document.getElementById("task-table-body");
(_a = document.getElementById("new-task")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => createTask());
getAllTasks();
//# sourceMappingURL=tasks.js.map