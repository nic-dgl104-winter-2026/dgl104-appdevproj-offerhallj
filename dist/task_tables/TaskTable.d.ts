import type { UIElement } from "../interfaces/UIElement.js";
export declare abstract class TaskTable implements UIElement {
    Element: HTMLElement;
    constructor();
    abstract create(): HTMLElement;
    protected getTableWithHeaders(...headers: string[]): HTMLElement;
}
//# sourceMappingURL=TaskTable.d.ts.map