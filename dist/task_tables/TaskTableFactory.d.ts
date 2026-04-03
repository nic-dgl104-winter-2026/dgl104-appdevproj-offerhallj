import { TaskTable } from "./TaskTable.js";
import type { TaskHeader } from "./TaskHeader.js";
export declare class TaskTableFactory {
    private _displayType;
    private _onSort;
    constructor(displayType: TaskDisplayType, onSort: (header: TaskHeader) => void);
    setDisplayType(displayType: TaskDisplayType): void;
    create(): TaskTable;
}
export declare enum TaskDisplayType {
    Basic = 0,
    Detailed = 1,
    Compact = 2
}
//# sourceMappingURL=TaskTableFactory.d.ts.map