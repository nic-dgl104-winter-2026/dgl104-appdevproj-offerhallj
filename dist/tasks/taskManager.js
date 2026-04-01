var _a;
import { TaskService } from "../../dist/tasks/TaskService.js";
import { Task } from "../../dist/tasks/Task.js";
/** An instance of a task displayed in the UI */
class TaskView {
    constructor(task) {
        this._task = task;
        this._element = this.createHTMLElement();
    }
    createHTMLElement() {
        let tr = document.createElement("tr");
        return tr;
    }
}
function getAllTasks() {
    service.getAllTasks(() => {
    });
}
function createTask(e) {
    e.preventDefault();
    service.createNewTask(createTitleInput.value, createDescriptionInput.value, createDueInput.value, createPriorityInput.value, () => { });
}
const tasks = [];
const service = TaskService.Instance;
const createTitleInput = document.getElementById("create-title");
const createDescriptionInput = document.getElementById("create-description");
const createDueInput = document.getElementById("create-duedate");
const createPriorityInput = document.getElementById("create-priority");
const taskBody = document.getElementById("task-table-body");
(_a = document.getElementById("create-task")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", createTask);
getAllTasks();
//# sourceMappingURL=taskManager.js.map