import { TaskElement } from "./TaskElement.js";
/** Create an overdue wrapper around the given task element */
export declare class OverdueTaskElement extends TaskElement {
    private _innerTaskElement;
    constructor(innerTaskElement: TaskElement);
    create(): HTMLElement;
}
//# sourceMappingURL=OverdueTaskElement.d.ts.map