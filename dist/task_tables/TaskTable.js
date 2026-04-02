export class TaskTable {
    constructor() {
        this.Element = this.create();
    }
    getTableWithHeaders(...headers) {
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
//# sourceMappingURL=TaskTable.js.map