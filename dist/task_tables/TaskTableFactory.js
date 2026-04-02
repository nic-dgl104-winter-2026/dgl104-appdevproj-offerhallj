import { DetailedTaskTable } from "./DetailedTaskTable.js";
import { BasicTaskTable } from "./BasicTaskTable.js";
import { TaskTable } from "./TaskTable.js";
export class TaskTableFactory {
    get Element() { return this.Table.Element; }
    get Body() { return this.Table.Body; }
    constructor(displayType) {
        this._displayType = TaskDisplayType.Basic;
        this._displayType = displayType;
        this.Table = this.create();
    }
    setDisplayType(displayType) {
        this._displayType = displayType;
        this.Table = this.create();
    }
    create() {
        switch (this._displayType) {
            case TaskDisplayType.Detailed: return new DetailedTaskTable();
            default: return new BasicTaskTable();
        }
    }
}
export var TaskDisplayType;
(function (TaskDisplayType) {
    TaskDisplayType[TaskDisplayType["Basic"] = 0] = "Basic";
    TaskDisplayType[TaskDisplayType["Detailed"] = 1] = "Detailed";
})(TaskDisplayType || (TaskDisplayType = {}));
//# sourceMappingURL=TaskTableFactory.js.map