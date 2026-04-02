import type { UIElement } from "../interfaces/UIElement.js";

export abstract class TaskTable implements UIElement {
    Element: HTMLElement;

    constructor() {
        this.Element = this.create();
    }

    abstract create(): HTMLElement;

    protected getTableWithHeaders(...headers: string[]): HTMLElement {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        for (let header in headers) {
            let th = document.createElement("th");
            th.textContent = header;
            tr.appendChild(th);
        }

        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(document.createElement("tbody"));
        return table;
    }
}