export class Task {
    public id: number | undefined;
    public title: string = "";
    public description: string = "";
    public createdDate: Date = new Date();
    public dueDate: Date | undefined;
    public status: TaskStatus = TaskStatus.ToDo;
    public priority: TaskPriority = TaskPriority.Low;

    constructor(title: string, description: string, dueDate: Date, priority: TaskPriority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export enum TaskStatus {
    ToDo, InProgress, Complete
}

export enum TaskPriority {
    Low = "Low", Medium = "Medium", High = "High"
}