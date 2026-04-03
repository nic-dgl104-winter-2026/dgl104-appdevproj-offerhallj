import { TaskElement } from "../TaskElement.js";
/** Create an overdue wrapper around the given task element */
export class OverdueTask extends TaskElement {
    constructor(innerTaskElement) {
        super(innerTaskElement.Task);
        this._innerTaskElement = innerTaskElement;
        this.Element = this.create();
    }
    create() {
        const innerElement = this._innerTaskElement.Element;
        innerElement.classList.add("overdue");
        return innerElement;
    }
}
//# sourceMappingURL=OverdueTask.js.map