import { TaskDisplayType } from "../task_tables/TaskTableFactory.js";
import { BasicTaskElement } from "./BasicTaskElement.js";
import { TaskElement } from "./TaskElement.js";
import { Task } from "../tasks/Task.js";

export class TaskElementFactory {
    private _type: TaskDisplayType;
    private _onEdit: (element: TaskElement) => void;
    private _onDelete: (element: TaskElement) => void;

    constructor(type: TaskDisplayType, 
        onEdit: (element: TaskElement) => void, 
        onDelete: (element: TaskElement) => void) {
            this._onEdit = onEdit;
            this._onDelete = onDelete;
            this._type = type;
    }

    public create(task: Task): TaskElement {
        let newElement: TaskElement = new BasicTaskElement(task);
        switch (this._type) {
            case TaskDisplayType.Basic: newElement = new BasicTaskElement(task); break;           
        }

        newElement.onEdit = this._onEdit;
        newElement.onDelete = this._onDelete;
        return newElement;
    }
}
