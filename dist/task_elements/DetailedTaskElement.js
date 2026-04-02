import { TaskElement } from "./TaskElement.js";
export class DetailedTaskElement extends TaskElement {
    create() {
        const tr = document.createElement("tr");
        tr.appendChild(this.createCellForValue(this.Task.title));
        tr.appendChild(this.createCellForValue(this.Task.priority));
        tr.appendChild(this.createCellForValue(this.Task.dueDate.toDateString()));
        tr.appendChild(this.createCellForValue(this.Task.status));
        tr.appendChild(this.createCellForValue(this.Task.createdDate.toDateString()));
        tr.appendChild(this.createCellForValue(this.Task.user));
        tr.appendChild(this.createButtonCell());
        return tr;
    }
}
//# sourceMappingURL=DetailedTaskElement.js.map