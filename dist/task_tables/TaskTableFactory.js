import { TaskTable } from "./TaskTable";
export class TaskTableFactory {
    constructor() {
        this._displayType = TaskDisplayType.Basic;
    }
    setDisplayType(displayType) {
        this._displayType = displayType;
    }
    create() {
        return undefined;
    }
}
export var TaskDisplayType;
(function (TaskDisplayType) {
    TaskDisplayType[TaskDisplayType["Basic"] = 0] = "Basic";
    TaskDisplayType[TaskDisplayType["Detailed"] = 1] = "Detailed";
})(TaskDisplayType || (TaskDisplayType = {}));
//# sourceMappingURL=TaskTableFactory.js.map