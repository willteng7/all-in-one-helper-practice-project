import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/todo-interface';


@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  taskList: Task[] = [];
  completedTasks: Task[] = []

  newTask: Task = {
    id: 0,
    title: ``,
    description: ``,
    dueDate: ``,
    completed: false,
  };

  addTask() {
    if (this.newTask.title.trim()) {
      const tempTask: Task = {
        id: this.taskList.length + 1,
        title: this.newTask.title,
        description: this.newTask.description,
        dueDate: this.newTask.dueDate,
        completed: this.newTask.completed,

      };


      this.taskList.push(tempTask);

      this.newTask = {      //restores the input fields to empty
        id: 0,
        title: '',
        description: '',
        dueDate: '',
        completed: false,
      };
    }
  };

  completeTask(taskId: number) {


    const taskIndex = this.taskList.findIndex(task => task.id === taskId);

    {
      const removedTask = this.taskList.splice(taskIndex, 1); // Remove from active tasks
      const completedTask = removedTask[0];
      completedTask.completed = true; // Mark as completed
      this.completedTasks.push(completedTask); // Add to completed tasks section
    };

  };

  undoDeleteTask(taskId: number) {


    const taskIndex = this.completedTasks.findIndex(task => task.id === taskId);

    {
      const [taskToRestore] = this.completedTasks.splice(taskIndex, 1); //learned this shortcut so I don't need to define another variable for the spliced array
      taskToRestore.completed = false;
      this.taskList.push(taskToRestore);
    }
  }

  permDelete(task: Task) {
    if (task.completed === true) {
      this.completedTasks = this.completedTasks.filter(t => t.id !== task.id)
    }
    else {
      this.taskList = this.taskList.filter(t => t.id !== task.id)
    }
  }

}

