import { TaskTable } from "./TaskTable.js";

export class BasicTaskTable extends TaskTable {
    create(): HTMLElement {
        return this.getTableWithHeaders("Title", "Priority", "Due Date", "Status", "Actions");
    }
}