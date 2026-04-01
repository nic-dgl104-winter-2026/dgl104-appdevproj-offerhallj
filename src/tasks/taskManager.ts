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
        const tr = document.createElement("tr");
        tr.appendChild(this.createCellForValue(this._task.title));
        tr.appendChild(this.createCellForValue(this._task.description));
        tr.appendChild(this.createCellForValue(this._task.dueDate.getDate().toString()));
        tr.appendChild(this.createCellForValue(this._task.priority));
        tr.appendChild(this.createCellForValue(this._task.status));
        const buttonCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => service.deleteTask(this._task, (r) => {
            if (r) deleteTaskView(this);
        }));

        buttonCell.appendChild(deleteButton);
        tr.appendChild(buttonCell);
        return tr;
    }

    private createCellForValue(val: string): HTMLElement {
        let td = document.createElement("td");
        td.textContent = val;
        return td;
    }

    // private createButton

    public get Element(): HTMLElement {
        return this._element;
    }
}

/** Retrieve all tasks for the current user from the database, convert them to taskViews, and draw them */
function getAllTasks() {
    service.getAllTasks((result, tasks) => {
        if (result == false) {
            console.log("Error: Failed to retrieve tasks");
            return;
        }
 
        // once we've got all of the tasks, create the taskviews
        for (let task of tasks) {
            taskViews.push(new TaskView(task));
        }

        drawTaskViews();
    });
}

/** Display all taskViews in the task table body */
function drawTaskViews() {
    console.log("he");
    taskBody.innerHTML = "";
    for (let task of taskViews) {
        taskBody.appendChild(task.Element);
    }
}

function drawTaskView(taskview: TaskView) {
    taskBody.appendChild(taskview.Element);
}

function createTask(e: SubmitEvent) {
    e.preventDefault();
    
    service.createNewTask(
        createTitleInput.value,
        createDescriptionInput.value,
        createDueInput.value,
        createPriorityInput.value,
        (result, newTask) => { 
            if (result == false || newTask == undefined) {
                console.log("Error: task could not be created!");
                return;
            }

            const newTaskView = new TaskView(newTask);
            taskViews.push(newTaskView);
            drawTaskView(newTaskView);
        }
    )
}

function deleteTaskView(taskView: TaskView) {
    const element = taskView.Element;
    taskBody.removeChild(element);
    const index = taskViews.indexOf(taskView);
    if (index >= 0) taskViews.splice(index, 1);
}

const service = TaskService.Instance;
const taskViews: TaskView[] = [];

const createTitleInput = document.getElementById("create-title") as HTMLInputElement;
const createDescriptionInput = document.getElementById("create-description") as HTMLInputElement;
const createDueInput = document.getElementById("create-duedate") as HTMLInputElement;
const createPriorityInput = document.getElementById("create-priority") as HTMLInputElement;

const taskBody = document.getElementById("task-table-body") as HTMLElement;

document.getElementById("create-task")?.addEventListener("submit", createTask)
getAllTasks();