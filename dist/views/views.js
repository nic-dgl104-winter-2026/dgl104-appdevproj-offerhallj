import { ViewHolder } from "../views/ViewHolder.js";
import { ViewService } from "./ViewService.js";
const viewHolder = ViewHolder.Instance;
const viewService = ViewService.Instance;
document.getElementById("save-view")?.addEventListener("click", () => {
    viewService.createView(viewHolder.view, (r) => {
        console.log(r);
    });
});
//# sourceMappingURL=views.js.map