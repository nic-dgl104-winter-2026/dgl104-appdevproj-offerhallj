import type { UIElement } from "../interfaces/UIElement.js";
import { Order } from "../utils/TaskSorter.js";
import { TaskHeader } from "./TaskHeader.js";
export declare abstract class TaskTable implements UIElement {
    abstract readonly displayHeaders: TaskHeader[];
    private static _activeHeaderElement;
    Element: HTMLElement;
    Body: HTMLElement;
    onSort: ((header: TaskHeader, order: Order) => void);
    sort(header: TaskHeader, order: Order): void;
    abstract create(): HTMLElement;
    protected getTableWithHeaders(...headers: TaskHeader[]): HTMLElement;
    protected createHeaderElement(header: TaskHeader): HTMLElement;
    private addHeaderSort;
}
//# sourceMappingURL=TaskTable.d.ts.map