import type { UIElement } from "../interfaces/UIElement.js";
import { Task } from "../tasks/Task.js";
export declare abstract class TaskElement implements UIElement {
    readonly Task: Task;
    Element: HTMLElement;
    protected edit: ((element: TaskElement) => void);
    protected delete: ((element: TaskElement) => void);
    set onEdit(callback: (element: TaskElement) => void);
    set onDelete(callback: (element: TaskElement) => void);
    constructor(task: Task);
    abstract create(): HTMLElement;
}
//# sourceMappingURL=TaskElement.d.ts.map