import { TaskElement } from "./TaskElement.js";
export class BasicTaskElement extends TaskElement {
    create() {
        const tr = document.createElement("tr");
        tr.appendChild(this.createCellForValue(this.Task.title));
        tr.appendChild(this.createCellForValue(this.Task.priority));
        tr.appendChild(this.createCellForValue(this.Task.dueDate.toDateString()));
        tr.appendChild(this.createCellForValue(this.Task.status));
        tr.appendChild(this.createButtonCell());
        return tr;
    }
}
//# sourceMappingURL=BasicTaskElement.js.map