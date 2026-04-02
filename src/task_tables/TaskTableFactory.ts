import { DetailedTaskTable } from "./DetailedTaskTable.js";
import { BasicTaskTable } from "./BasicTaskTable.js";
import { TaskTable } from "./TaskTable.js";

export class TaskTableFactory {
    private _displayType: TaskDisplayType = TaskDisplayType.Basic;
    Table: TaskTable;

    get Element(): HTMLElement { return this.Table.Element; }
    get Body(): HTMLElement { return this.Table.Body; }

    constructor(displayType: TaskDisplayType) {
        this._displayType = displayType;
        this.Table = this.create();
    }

    public setDisplayType(displayType: TaskDisplayType) {
        this._displayType = displayType;
        this.Table = this.create();
    }

    public create(): TaskTable {
        switch (this._displayType) {
            case TaskDisplayType.Detailed: return new DetailedTaskTable(); 
            default: return new BasicTaskTable();
        } 
    }
}


export enum TaskDisplayType {
    Basic, Detailed
}