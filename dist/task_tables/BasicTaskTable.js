import { TaskTable } from "./TaskTable.js";
export class BasicTaskTable extends TaskTable {
    create() {
        return this.getTableWithHeaders("Title", "Due Date", "Priority", "Status", "Tags", "Actions");
    }
}
//# sourceMappingURL=BasicTaskTable.js.map