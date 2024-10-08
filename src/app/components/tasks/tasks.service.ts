import { Injectable } from "@angular/core";
import { type ITask } from "../../../types";

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks: ITask[] = [
        {
            id: "0",
            userId: "0",
            title: "Task 1",
            description: "This is a task description",
            date: "2023-01-01",
        },
        {
            id: "1",
            userId: "3",
            title: "Task 2",
            description: "This is a task description",
            date: "2023-01-02",
        },
        {
            id: "2",
            userId: "2",
            title: "Task 3",
            description: "This is a task description",
            date: "2023-01-03",
        },
        {
            id: "3",
            userId: "1",
            title: "Task 4",
            description: "This is a task description",
            date: "2023-01-04",
        },
        {
            id: "4",
            userId: "0",
            title: "Task 5",
            description: "This is a task description",
            date: "2023-01-05",
        },
        {
            id: "5",
            userId: "3",
            title: "Task 6",
            description: "This is a task description",
            date: "2023-01-06",
        },
    ];

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTask(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(task: ITask) {
        this.tasks.unshift(task);
        this.saveTasks();
    }

    removeTask(taskId: string) {
        console.log(taskId);
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}