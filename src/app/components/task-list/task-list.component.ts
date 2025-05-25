import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  newTask = '';
  tasks: Task[] = [];

  createTask() {
    if (!this.newTask.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      description: this.newTask,
      completed: false
    };

    this.tasks.push(newTask);
    this.newTask = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }
}

