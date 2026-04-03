import { DetailedTaskTable } from "./DetailedTaskTable.js";
import { BasicTaskTable } from "./BasicTaskTable.js";
import type { Order } from "../utils/TaskSorter.js";
import type { TaskHeader } from "./TaskHeader.js";
import { TaskTable } from "./TaskTable.js";

export class TaskTableFactory {
    private _displayType: TaskDisplayType = TaskDisplayType.Basic;
    private _onSort: (header: TaskHeader, order: Order) => void;

    constructor(displayType: TaskDisplayType, onSort: (header: TaskHeader, order: Order) => void) {
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