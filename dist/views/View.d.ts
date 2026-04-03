import { TaskHeader } from "../task_tables/TaskHeader.js";
import { TaskStatus, TaskPriority } from "../tasks/Task.js";
import type { Order } from "../utils/TaskSorter.js";
/** Saves the sorting and filtering preferences of the task table */
export declare class View {
    statusFilters: Map<TaskStatus, boolean>;
    priorityFilters: Map<TaskPriority, boolean>;
    sortHeader: TaskHeader | undefined;
    sortOrder: Order | undefined;
    searchFilter: TaskHeader;
    searchValue: string;
}
//# sourceMappingURL=View.d.ts.map