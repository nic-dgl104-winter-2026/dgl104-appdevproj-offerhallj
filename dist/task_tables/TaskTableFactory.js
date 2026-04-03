import { DetailedTaskTable } from "./DetailedTaskTable.js";
import { BasicTaskTable } from "./BasicTaskTable.js";
import { TaskTable } from "./TaskTable.js";
export class TaskTableFactory {
    constructor(displayType, onSort) {
        this._displayType = TaskDisplayType.Basic;
        this._displayType = displayType;
        this._onSort = onSort;
    }
    setDisplayType(displayType) {
        this._displayType = displayType;
    }
    create() {
        let table;
        switch (this._displayType) {
            case TaskDisplayType.Detailed:
                table = new DetailedTaskTable();
                break;
            default: table = new BasicTaskTable();
        }
        table.onSort = this._onSort;
        return table;
    }
}
export var TaskDisplayType;
(function (TaskDisplayType) {
    TaskDisplayType[TaskDisplayType["Basic"] = 0] = "Basic";
    TaskDisplayType[TaskDisplayType["Detailed"] = 1] = "Detailed";
    TaskDisplayType[TaskDisplayType["Compact"] = 2] = "Compact";
})(TaskDisplayType || (TaskDisplayType = {}));
//# sourceMappingURL=TaskTableFactory.js.map