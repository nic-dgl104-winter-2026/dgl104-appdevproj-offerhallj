import { TaskService } from "../../dist/tasks/TaskService.js";
import { Task } from "../../dist/tasks/Task.js";

/** An instance of a task displayed in the UI */
class TaskView {
    private _element: HTMLElement;
    private _task: Task;

    constructor(task: Task) {
        this._task = task;
        this._element = this.createHTMLElement();
    }

    private createHTMLElement(): HTMLElement {
        let tr = document.createElement("tr");
        return tr;
    }
}

function getAllTasks() {
    service.getAllTasks(() => {

    });
}

function createTask(e: SubmitEvent) {
    e.preventDefault();
    
    service.createNewTask(
        createTitleInput.value,
        createDescriptionInput.value,
        createDueInput.value,
        createPriorityInput.value,
        () => { }
    )
}

const tasks: TaskView[] = [];

const service = TaskService.Instance;
const createTitleInput = document.getElementById("create-title") as HTMLInputElement;
const createDescriptionInput = document.getElementById("create-description") as HTMLInputElement;
const createDueInput = document.getElementById("create-duedate") as HTMLInputElement;
const createPriorityInput = document.getElementById("create-priority") as HTMLInputElement;

const taskBody = document.getElementById("task-table-body");

document.getElementById("create-task")?.addEventListener("submit", createTask)
getAllTasks();