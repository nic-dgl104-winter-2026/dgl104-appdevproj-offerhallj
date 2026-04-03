import { TaskHeader } from "../task_tables/TaskHeader.js";
import { ViewHolder } from "../views/ViewHolder.js";
import { Task } from "../tasks/Task.js";
const viewHolder = ViewHolder.Instance;
export function isFilteredOut(task) {
    // handle basic filters first
    if (viewHolder.view.priorityFilters.get(task.priority) == false)
        return true;
    if (viewHolder.view.statusFilters.get(task.status) == false)
        return true;
    // handle search filters
    switch (viewHolder.view.searchFilter) {
        case TaskHeader.Title: return isTextFiltered(task.title);
        case TaskHeader.Description: return isTextFiltered(task.description);
    }
    return false;
}
export function canFilter(header) {
    switch (header) {
        case TaskHeader.Actions:
        case TaskHeader.Status:
        case TaskHeader.Priority:
            return false;
        default:
            return true;
    }
}
function isTextFiltered(text) {
    if (viewHolder.view.searchFilter == undefined)
        return false;
    return !text.toLowerCase().includes(viewHolder.view.searchValue.toLowerCase());
}
//# sourceMappingURL=TaskFilter.js.map