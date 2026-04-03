import { TaskElement } from "../task_elements/TaskElement.js";
import { TaskDetail } from "../task_elements/TaskDetail.js";
export declare function sort(header: TaskDetail, elements: TaskElement[], order: Order): TaskElement[] | undefined;
export declare function canSort(header: TaskDetail): boolean;
export declare enum Order {
    Asc = "Asc",
    Desc = "Desc"
}
//# sourceMappingURL=TaskSorter.d.ts.map