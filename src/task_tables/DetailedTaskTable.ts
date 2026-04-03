import { TaskTable } from "./TaskTable.js";

export class DetailedTaskTable extends TaskTable {
    create(): HTMLElement {
        return this.getTableWithHeaders("Title", "Due Date", "Priority", "Status", "Tags", "Created On", "By User", "Actions");
    }
}