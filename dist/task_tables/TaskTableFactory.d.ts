import { TaskTable } from "./TaskTable";
export declare class TaskTableFactory {
    private _displayType;
    setDisplayType(displayType: TaskDisplayType): void;
    create(): TaskTable | undefined;
}
export declare enum TaskDisplayType {
    Basic = 0,
    Detailed = 1
}
//# sourceMappingURL=TaskTableFactory.d.ts.map