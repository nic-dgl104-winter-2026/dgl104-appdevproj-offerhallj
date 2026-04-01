export declare class Task {
    id: number | undefined;
    title: string;
    description: string;
    createdDate: Date;
    dueDate: Date | undefined;
    status: TaskStatus;
    priority: TaskPriority;
    constructor(title: string, description: string, dueDate: Date);
}
export declare enum TaskStatus {
    ToDo = 0,
    InProgress = 1,
    Complete = 2
}
export declare enum TaskPriority {
    Low = 0,
    Medium = 1,
    High = 2
}
//# sourceMappingURL=Task.d.ts.map