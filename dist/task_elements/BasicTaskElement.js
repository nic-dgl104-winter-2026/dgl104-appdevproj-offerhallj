import { TaskElement } from "./TaskElement.js";
import { Task } from "../tasks/Task.js";
import { TaskDetail } from "./TaskDetail.js";
export class BasicTaskElement extends TaskElement {
    constructor(task) {
        super(task);
        this.Element = this.create();
        TaskElement.details = [
            TaskDetail.Title,
            TaskDetail.DueDate,
            TaskDetail.Priority,
            TaskDetail.Status,
            TaskDetail.Tags
        ];
    }
    create() {
        const tr = document.createElement("tr");
        tr.appendChild(this.createCellForValue(this.Task.title));
        tr.appendChild(this.createCellForValue(this.Task.dueDate.toDateString()));
        tr.appendChild(this.createCellForValue(this.Task.priority));
        tr.appendChild(this.createCellForValue(this.Task.status));
        tr.appendChild(this.createCellForValue(this.Task.tags));
        tr.appendChild(this.createButtonCell());
        return tr;
    }
}
//# sourceMappingURL=BasicTaskElement.js.map