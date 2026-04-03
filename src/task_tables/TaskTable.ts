// import type { UIElement } from "../interfaces/UIElement.js";
// import { canSort, Order } from "../utils/TaskSorter.js";
// import { ViewHolder } from "../views/ViewHolder.js";
// import { TaskDetail } from "../task_elements/TaskDetail.js";

// const viewHolder = ViewHolder.Instance;

// export abstract class TaskTable implements UIElement {
//     abstract readonly displayHeaders: TaskDetail[];

//     private static _activeHeaderElement: HTMLElement | undefined;
//     Element!: HTMLElement;
//     Body!: HTMLElement;
    
//     public onSort!: ((header: TaskDetail, order: Order) => void);
//     public sort(header: TaskDetail, order: Order): void { this.onSort(header, order); }

//     abstract create(): HTMLElement;

//     protected getTableWithHeaders(...headers: TaskDetail[]): HTMLElement {
//         const table = document.createElement("table");
//         const thead = document.createElement("thead");
//         const tr = document.createElement("tr");
//         for (let header of headers) {
//             tr.appendChild(this.createHeaderElement(header));
//         }

//         thead.appendChild(tr);
//         table.appendChild(thead);
//         this.Body = document.createElement("tbody");
//         table.appendChild(this.Body);
//         return table;
//     }

//     protected createHeaderElement(header: TaskDetail): HTMLElement {
//         let th = document.createElement("th");
//         th.textContent = header;
//         this.addHeaderSort(header, th);
//         return th;
//     }

//     private addHeaderSort(header: TaskDetail, th: HTMLElement) {
//         if (!canSort(header)) return; 
        
//         th.addEventListener("click", () => {
//             if (TaskTable._activeHeaderElement != undefined && th != TaskTable._activeHeaderElement) {
//                 TaskTable._activeHeaderElement.classList.remove("asc");
//                 TaskTable._activeHeaderElement.classList.remove("dsc");
//             }

//             let order: Order = Order.Asc;
//             if (th.classList.contains("asc")) {
//                 th.classList.remove("asc");
//                 th.classList.add("dsc");
//                 order = Order.Desc;
//             }

//             else {
//                 th.classList.remove("dsc");
//                 th.classList.add("asc");
//             }
            
//             viewHolder.view.sortOrder = order;
//             viewHolder.view.sortHeader = header;
//             TaskTable._activeHeaderElement = th;
//             this.sort(header, order);
//         });
//     }
// }