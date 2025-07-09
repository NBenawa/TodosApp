import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './model/todo.type';
import { TodoItem } from './components/todo-item/todo-item';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TodoItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TodosApp';
  todos = signal<Array<Todo>>([]);
  newTodo = signal('');
  addTodo() {
    alert('todo added!');
  }
}
