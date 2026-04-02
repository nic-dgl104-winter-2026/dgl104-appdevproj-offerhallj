import { TaskService } from "./TaskService.js";
import { Task } from "./Task.js";

/** Create a new task and add it to the view */
function createTask(e: SubmitEvent) {
    e.preventDefault();
    
    service.createNewTask(
        titleInput.value,
        descriptionInput.value,
        dueInput.value,
        priorityInput.value,
        (result, newTask) => { 

        }
    )
}

function editTask(task: Task) {
    if (task.id != undefined) idInput.value = task.id.toString();
    userInput.value = task.user;
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    dueInput.value = task.getFormattedDate();
    priorityInput.value = task.priority;
}

function saveTask(e: SubmitEvent) {
    e.preventDefault();
    console.log(idInput.value);
    console.log(userInput.value);
    service.editTask(
        parseInt(idInput.value),
        titleInput.value,
        descriptionInput.value,
        dueInput.value,
        priorityInput.value,
        userInput.value,
        () => {
        }
    )    

}

const service = TaskService.Instance;

const idInput = document.getElementById("id") as HTMLInputElement;
const userInput = document.getElementById("user") as HTMLInputElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const descriptionInput = document.getElementById("description") as HTMLInputElement;
const dueInput = document.getElementById("duedate") as HTMLInputElement;
const createdDate = document.getElementById("createdate") as HTMLInputElement;
const priorityInput = document.getElementById("priority") as HTMLInputElement;
const statusInput = document.getElementById("status") as HTMLInputElement;