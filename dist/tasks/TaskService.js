import { Task, TaskPriority, TaskStatus } from "../../dist/tasks/Task.js";
import { TaskRepository } from "../../dist/tasks/TaskRepository";
const repo = TaskRepository.Instance;
export class TaskService {
    static get Instance() {
        if (TaskService._instance == null)
            TaskService._instance = new TaskService();
        return TaskService._instance;
    }
    createNewTask(title, description, due, priority, callback) {
        const newTask = new Task(title, description, new Date(due), priority);
    }
}
//# sourceMappingURL=TaskService.js.map