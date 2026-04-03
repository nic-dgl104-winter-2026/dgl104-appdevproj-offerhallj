import { canSort } from "../utils/TaskSorter.js";
import { TaskHeader } from "./TaskHeader.js";
export class TaskTable {
    sort(header) { this.onSort(header); }
    constructor() {
        this.Element = this.create();
    }
    getTableWithHeaders(...headers) {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        for (let header of headers) {
            tr.appendChild(this.createHeaderElement(header));
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        this.Body = document.createElement("tbody");
        table.appendChild(this.Body);
        return table;
    }
    createHeaderElement(header) {
        let th = document.createElement("th");
        th.textContent = header;
        this.addHeaderSort(header, th);
        return th;
    }
    addHeaderSort(header, th) {
        if (!canSort(header))
            return;
        th.addEventListener("click", () => this.sort(header));
    }
}
//# sourceMappingURL=TaskTable.js.map