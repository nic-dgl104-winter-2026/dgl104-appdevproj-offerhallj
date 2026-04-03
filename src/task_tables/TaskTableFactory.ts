import { DetailedTaskTable } from "./DetailedTaskTable.js";
import { BasicTaskTable } from "./BasicTaskTable.js";
import { TaskTable } from "./TaskTable.js";
import type { TaskHeader } from "./TaskHeader.js";

export class TaskTableFactory {
    private _displayType: TaskDisplayType = TaskDisplayType.Basic;
    private _onSort: (header: TaskHeader) => void;

    constructor(displayType: TaskDisplayType, onSort: (header: TaskHeader) => void) {
        this._displayType = displayType;
        this._onSort = onSort;
    }

    public setDisplayType(displayType: TaskDisplayType) {
        this._displayType = displayType;
    }

    public create(): TaskTable {
        let table!: TaskTable;
        switch (this._displayType) {
            case TaskDisplayType.Detailed: table = new DetailedTaskTable(); break; 
            default: table = new BasicTaskTable();
        } 

        table.onSort = this._onSort;
        return table;
    }
}

export enum TaskDisplayType {
    Basic, Detailed, Compact
}