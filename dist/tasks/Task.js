export class Task {
    constructor(title, description, dueDate) {
        this.title = "";
        this.description = "";
        this.createdDate = new Date();
        this.status = TaskStatus.ToDo;
        this.priority = TaskPriority.Low;
        title = title;
        description = description;
        dueDate = dueDate;
    }
}
export var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["ToDo"] = 0] = "ToDo";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Complete"] = 2] = "Complete";
})(TaskStatus || (TaskStatus = {}));
export var TaskPriority;
(function (TaskPriority) {
    TaskPriority[TaskPriority["Low"] = 0] = "Low";
    TaskPriority[TaskPriority["Medium"] = 1] = "Medium";
    TaskPriority[TaskPriority["High"] = 2] = "High";
})(TaskPriority || (TaskPriority = {}));
//# sourceMappingURL=Task.js.map