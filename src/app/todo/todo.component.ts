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

  taskList: Task[] = [
    // {
    //   id:1,
    //   title: `Test task`,
    //   description: `test`,
    //   dueDate:``,
    //   completed: false,
    // }
  ];

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
  console.log(tempTask);

  this.taskList.push(tempTask);
  console.log('Updated taskList:', this.taskList);
};

deleteTask(taskId: number){
  this.taskList = this.taskList.filter(task=> task.id !== taskId)
};

}
