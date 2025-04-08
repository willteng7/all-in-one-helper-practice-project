import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../todo-interface';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  taskList: Task[] = [];
  completedTasks: Task [] = []

newTask: Task = {
  id: 0, 
  title: ``,
  description: ``,
  dueDate: ``,
  completed: false,
};

addTask() {
  const tempTask: Task={
    id: this.taskList.length +1,
    title: this.newTask.title, 
    description: this.newTask.description,
    dueDate: this.newTask.dueDate,
    completed: this.newTask.completed,
  };
  this.taskList.push(tempTask);

  this.newTask = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  };
 
};

deleteTask(taskId: number){
  const taskIndex = this.taskList.findIndex(task => task.id === taskId);

  //if (taskIndex !== -1) 
    {
    const removedTask = this.taskList.splice(taskIndex, 1); // Remove from active tasks
    const completedTask = removedTask[0];
    completedTask.completed = true; // Mark as completed
    this.completedTasks.push(completedTask); // Add to completed tasks
  };

};

undoDeleteTask(taskId: number) {
  const taskIndex = this.completedTasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    const [taskToRestore] = this.completedTasks.splice(taskIndex, 1);
    taskToRestore.completed = false;
    this.taskList.push(taskToRestore);
  }
}

permDelete(taskId: number) {
  this.taskList = this.taskList.filter(task=> task.id !== taskId)
}

}
