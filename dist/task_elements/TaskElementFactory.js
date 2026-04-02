import { TaskDisplayType } from "../task_tables/TaskTableFactory.js";
import { BasicTaskElement } from "./BasicTaskElement.js";
import { TaskElement } from "./TaskElement.js";
import { Task } from "../tasks/Task.js";
export class TaskElementFactory {
    constructor(type, onEdit, onDelete) {
        this._onEdit = onEdit;
        this._onDelete = onDelete;
        this._type = type;
    }
    create(task) {
        let newElement = new BasicTaskElement(task);
        switch (this._type) {
            case TaskDisplayType.Basic:
                newElement = new BasicTaskElement(task);
                break;
        }
        newElement.onEdit = this._onEdit;
        newElement.onDelete = this._onDelete;
        return newElement;
    }
}
//# sourceMappingURL=TaskElementFactory.js.map