import { TaskTable } from "./TaskTable.js";
export class BasicTaskTable extends TaskTable {
    create() {
        return this.getTableWithHeaders("Title", "Priority", "Due Date", "Status", "Actions");
    }
}
//# sourceMappingURL=BasicTaskTable.js.map