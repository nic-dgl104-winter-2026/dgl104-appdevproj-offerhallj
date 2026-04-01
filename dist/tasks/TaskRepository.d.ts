import { Repository } from "../../dist/repository.js";
export declare class TaskRepository extends Repository<TaskRepository> {
    private static _instance;
    static get Instance(): TaskRepository;
    constructor();
    createTable(callback: () => void): void;
}
//# sourceMappingURL=TaskRepository.d.ts.map