import { isFilteredOut } from "../utils/TaskFilter.js";
import { Task, TaskStatus } from "../tasks/Task.js";
export class TaskElement {
    constructor(task) {
        this.Task = task;
    }
    get isFilteredOut() {
        return isFilteredOut(this.Task);
    }
    /** Create an HTML Element with an arbitrary number of classes */
    createHTMLElement(element, ...classes) {
        const el = document.createElement(element);
        if (classes != undefined) {
            for (let c of classes) {
                el.classList.add(c);
            }
        }
        return el;
    }
    /** Create an image element referencing the given resource, with the given width, and an arbitrary number of classes */
    createImage(res, width, ...classes) {
        const img = this.createHTMLElement("img", ...classes);
        img.src = res;
        img.width = width;
        return img;
    }
    /** Create the basic parent element which all TaskElements will implement */
    createParentElement(type) {
        const taskElement = this.createHTMLElement("div", "task-element", type);
        const mainContent = this.createHTMLElement("div", "main-content");
        taskElement.appendChild(mainContent);
        const headerContainer = this.createHTMLElement("div", "header-container");
        mainContent.appendChild(headerContainer);
        const h3 = document.createElement("h3");
        h3.textContent = this.Task.title;
        headerContainer.appendChild(h3);
        const dueDate = this.createHTMLElement("div", "due-date-container");
        headerContainer.appendChild(dueDate);
        const clockImg = this.createImage("docs/icons/clock.svg", 20);
        dueDate.appendChild(clockImg);
        const dueP = document.createElement("p");
        dueP.textContent = `Due: ${this.Task.dueDate.toDateString()}`;
        dueDate.appendChild(dueP);
        const actionContainer = this.createActionContainer(type);
        taskElement?.appendChild(actionContainer);
        return taskElement;
    }
    /** Create the detail content for the Task */
    createDetailContent() {
        const parent = this.createHTMLElement("div", "task-detail-content");
        const clockImg = this.createImage("docs/icons/clock.svg", 20);
        const created = this.createTextElement("p", `Created: ${this.Task.createdDate.toDateString()}`);
        const priorityImg = this.createImage("docs/icons/priority.svg", 20);
        const priority = this.createTextElement("p", `Priority: ${this.Task.priority}`);
        const checklistImg = this.createImage("docs/icons/checklist.svg", 20);
        const status = this.createTextElement("p", `Status: ${this.Task.status}`);
        const userImg = this.createImage("docs/icons/user.svg", 20);
        const user = this.createTextElement("p", `Created by: ${this.Task.user}`);
        parent.appendChild(clockImg);
        parent.appendChild(created);
        parent.appendChild(priorityImg);
        parent.appendChild(priority);
        parent.appendChild(checklistImg);
        parent.appendChild(status);
        parent.appendChild(userImg);
        parent.appendChild(user);
        return parent;
    }
    /** Create the tags and tag container for the Task */
    createTagElement() {
        const parent = this.createHTMLElement("div", "tag-container");
        parent.appendChild(this.createTextElement("p", "Tags: "));
        for (let tag of this.Task.getTagList()) {
            tag = tag.trim();
            if (tag == "")
                continue;
            let small = this.createTextElement("small", tag);
            parent.appendChild(small);
        }
        return parent;
    }
    /** Create a text element with the given string value */
    createTextElement(type, content) {
        const text = document.createElement(type);
        text.textContent = content;
        return text;
    }
    /** Create the action button container according to the given type */
    createActionContainer(type) {
        const parent = this.createHTMLElement("div", "action-container");
        const deleteButton = this.createActionButton("Delete", "docs/icons/delete.svg", () => this.onDelete(this), type != "compact");
        const editButton = this.createActionButton("Edit", "docs/icons/edit-square.svg", () => this.onEdit(this), type != "compact");
        const statusSelector = this.createStatusSetter("docs/icons/checklist.svg");
        if (type != "detailed") {
            const compactContainer = this.createHTMLElement("div", "compact-action-container");
            parent.appendChild(compactContainer);
            if (type == "compact") {
                compactContainer.appendChild(statusSelector);
            }
            compactContainer.appendChild(editButton);
            compactContainer.appendChild(deleteButton);
            if (type == "basic") {
                parent.appendChild(statusSelector);
            }
        }
        if (type == "detailed") {
            parent.appendChild(editButton);
            parent.appendChild(deleteButton);
            parent.appendChild(statusSelector);
        }
        return parent;
    }
    /** Create an action button with the given label, icon, and action applied */
    createActionButton(label, rsc, action, withLabel = true) {
        const button = this.createHTMLElement("div", "action-button");
        const icon = this.createImage(rsc, 24);
        button.appendChild(icon);
        if (withLabel) {
            const p = this.createTextElement("p", label);
            button.appendChild(p);
        }
        button.addEventListener("click", action);
        return button;
    }
    /** Create the task status dropdown selector */
    createStatusSetter(rsc) {
        const button = this.createHTMLElement("div", "action-button");
        const icon = this.createImage(rsc, 24);
        button.appendChild(icon);
        const select = document.createElement("select");
        select.appendChild(this.createStatusOption(TaskStatus.ToDo));
        select.appendChild(this.createStatusOption(TaskStatus.InProgress));
        select.appendChild(this.createStatusOption(TaskStatus.Complete));
        button.appendChild(select);
        console.log(this.Task.status);
        select.value = this.Task.status;
        select.addEventListener("change", () => {
            console.log(select.value);
            this.Task.status = select.value;
            this.onSetStatus(this);
        });
        return button;
    }
    /** Create an option for the task status dropdown selector */
    createStatusOption(status) {
        const option = document.createElement("option");
        option.textContent = status;
        option.value = status;
        return option;
    }
}
TaskElement.details = [];
//# sourceMappingURL=TaskElement.js.map