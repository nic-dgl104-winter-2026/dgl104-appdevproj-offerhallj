import { TaskHeader } from "./TaskHeader.js";
import { TaskTable } from "./TaskTable.js";
export class BasicTaskTable extends TaskTable {
    constructor() {
        super();
        this.displayHeaders = [
            TaskHeader.Title,
            TaskHeader.DueDate,
            TaskHeader.Priority,
            TaskHeader.Status,
            TaskHeader.Tags,
            TaskHeader.Actions
        ];
        this.Element = this.create();
    }
    create() {
        return this.getTableWithHeaders(...this.displayHeaders);
    }
}
//# sourceMappingURL=BasicTaskTable.js.map