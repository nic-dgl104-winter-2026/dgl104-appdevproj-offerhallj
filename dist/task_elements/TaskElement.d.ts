import type { TaskDetail } from "./TaskDetail.js";
import type { UIElement } from "../interfaces/UIElement.js";
import { Task } from "../tasks/Task.js";
export declare abstract class TaskElement implements UIElement {
    static details: TaskDetail[];
    readonly Task: Task;
    Element: HTMLElement;
    onEdit: ((element: TaskElement) => void);
    onDelete: ((element: TaskElement) => void);
    onSetStatus: ((element: TaskElement) => void);
    constructor(task: Task);
    abstract create(): HTMLElement;
    get isFilteredOut(): boolean;
    /** Create an HTML Element with an arbitrary number of classes */
    protected createHTMLElement(element: string, ...classes: string[]): HTMLElement;
    /** Create an image element referencing the given resource, with the given width, and an arbitrary number of classes */
    protected createImage(res: string, width: number, ...classes: string[]): HTMLImageElement;
    /** Create the basic parent element which all TaskElements will implement */
    protected createParentElement(type: string): HTMLElement;
    /** Create the detail content for the Task */
    protected createDetailContent(): HTMLElement;
    /** Create the tags and tag container for the Task */
    protected createTagElement(): HTMLElement;
    /** Create a text element with the given string value */
    protected createTextElement(type: string, content: string): HTMLElement;
    /** Create the action button container according to the given type */
    protected createActionContainer(type: string): HTMLElement;
    /** Create an action button with the given label, icon, and action applied */
    protected createActionButton(label: string, rsc: string, action: () => void, withLabel?: boolean): HTMLElement;
    /** Create the task status dropdown selector */
    protected createStatusSetter(rsc: string): HTMLElement;
    /** Create an option for the task status dropdown selector */
    private createStatusOption;
}
//# sourceMappingURL=TaskElement.d.ts.map