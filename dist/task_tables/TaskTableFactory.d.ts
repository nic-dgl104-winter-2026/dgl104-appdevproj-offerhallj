import type { Order } from "../utils/TaskSorter.js";
import type { TaskHeader } from "./TaskHeader.js";
import { TaskTable } from "./TaskTable.js";
export declare class TaskTableFactory {
    private _displayType;
    private _onSort;
    constructor(displayType: TaskDisplayType, onSort: (header: TaskHeader, order: Order) => void);
    setDisplayType(displayType: TaskDisplayType): void;
    create(): TaskTable;
}
export declare enum TaskDisplayType {
    Basic = 0,
    Detailed = 1,
    Compact = 2
}
//# sourceMappingURL=TaskTableFactory.d.ts.map