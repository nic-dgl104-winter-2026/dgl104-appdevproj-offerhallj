import { TaskService } from "./TaskService.js";
import { Task } from "./Task.js";
/** Create a new task and add it to the view */
function createTask(e) {
    e.preventDefault();
    service.createNewTask(titleInput.value, descriptionInput.value, dueInput.value, priorityInput.value, (result, newTask) => {
    });
}
function editTask(task) {
    if (task.id != undefined)
        idInput.value = task.id.toString();
    userInput.value = task.user;
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    dueInput.value = task.getFormattedDate();
    priorityInput.value = task.priority;
}
function saveTask(e) {
    e.preventDefault();
    console.log(idInput.value);
    console.log(userInput.value);
    service.editTask(parseInt(idInput.value), titleInput.value, descriptionInput.value, dueInput.value, priorityInput.value, userInput.value, () => {
    });
}
const service = TaskService.Instance;
const idInput = document.getElementById("id");
const userInput = document.getElementById("user");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dueInput = document.getElementById("duedate");
const createdDate = document.getElementById("createdate");
const priorityInput = document.getElementById("priority");
const statusInput = document.getElementById("status");
//# sourceMappingURL=task_form.js.map