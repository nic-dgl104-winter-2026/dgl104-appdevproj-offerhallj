import { TaskHeader } from "./TaskHeader.js";
import { TaskTable } from "./TaskTable.js";

export class BasicTaskTable extends TaskTable {
    readonly displayHeaders: TaskHeader[] = [
        TaskHeader.Title, 
        TaskHeader.DueDate, 
        TaskHeader.Priority, 
        TaskHeader.Status, 
        TaskHeader.Tags, 
        TaskHeader.Actions
    ];
    
    constructor() {
        super();
        this.Element = this.create();
    }

    create(): HTMLElement {
        return this.getTableWithHeaders(...this.displayHeaders);
    }
}