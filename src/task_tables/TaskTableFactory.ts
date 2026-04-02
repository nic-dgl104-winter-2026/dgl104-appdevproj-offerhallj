import { TaskTable } from "./TaskTable";

export class TaskTableFactory {
    private _displayType: TaskDisplayType = TaskDisplayType.Basic;

    public setDisplayType(displayType: TaskDisplayType) {
        this._displayType = displayType;
    }

    public create(): TaskTable | undefined {
        return undefined;
    }
}


export enum TaskDisplayType {
    Basic, Detailed
}