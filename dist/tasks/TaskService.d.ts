export declare class TaskService {
    private static _instance;
    static get Instance(): TaskService;
    createNewTask(title: string, description: string, due: string, priority: string, callback: (result: boolean) => void): void;
}
//# sourceMappingURL=TaskService.d.ts.map