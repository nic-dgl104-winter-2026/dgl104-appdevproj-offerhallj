import { Repository } from "../../dist/repository.js";

const TASK_TABLE = "task_table"

export class TaskRepository extends Repository<TaskRepository> {
    private static _instance: TaskRepository;

    static get Instance(): TaskRepository { 
        if (TaskRepository._instance == null) TaskRepository._instance = new TaskRepository();
        return TaskRepository._instance;
    }

    constructor() {
        super();
        this.openDatabase(TASK_TABLE, 1);
    }

    createTable(callback: () => void): void {
        const table = this._db?.createObjectStore(TASK_TABLE, { keyPath: "id", autoIncrement:true});
        table?.createIndex("title", "title", { unique: true});
        table?.createIndex("description", "description", { unique: false});
        table?.createIndex("createdDate", "createdDate", { unique: true});
        table?.createIndex("dueDate", "dueDate", { unique: false});
        table?.createIndex("status", "status", { unique: false});
        table?.createIndex("priority", "priority", { unique: false});
        callback();
    }
}