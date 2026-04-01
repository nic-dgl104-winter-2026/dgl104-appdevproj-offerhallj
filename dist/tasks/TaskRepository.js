import { Repository } from "../../dist/repository.js";
const TASK_TABLE = "task_table";
export class TaskRepository extends Repository {
    static get Instance() {
        if (TaskRepository._instance == null)
            TaskRepository._instance = new TaskRepository();
        return TaskRepository._instance;
    }
    constructor() {
        super();
        this.openDatabase(TASK_TABLE, 1);
    }
    createTable(callback) {
        var _a;
        const table = (_a = this._db) === null || _a === void 0 ? void 0 : _a.createObjectStore(TASK_TABLE, { keyPath: "id", autoIncrement: true });
        table === null || table === void 0 ? void 0 : table.createIndex("title", "title", { unique: true });
        table === null || table === void 0 ? void 0 : table.createIndex("description", "description", { unique: false });
        table === null || table === void 0 ? void 0 : table.createIndex("createdDate", "createdDate", { unique: true });
        table === null || table === void 0 ? void 0 : table.createIndex("dueDate", "dueDate", { unique: false });
        table === null || table === void 0 ? void 0 : table.createIndex("status", "status", { unique: false });
        table === null || table === void 0 ? void 0 : table.createIndex("priority", "priority", { unique: false });
        callback();
    }
}
//# sourceMappingURL=TaskRepository.js.map