import { TaskTable } from "./TaskTable.js";
export class DetailedTaskTable extends TaskTable {
    create() {
        return this.getTableWithHeaders("Title", "Priority", "Due Date", "Status", "Created On", "By User", "Actions");
    }
}
//# sourceMappingURL=DetailedTaskTable.js.map