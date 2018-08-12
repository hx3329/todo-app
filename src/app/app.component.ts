import { Component } from '@angular/core';
// Import class so we can register it as dependency injection token
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: 'Hello World',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

// Ask Angular DI system to inject the dependency
// associated with the dependency injection token `TodoDataService`
// and assign it to a property called `todoDataService`
export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }


  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
