import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { loadTodos } from 'src/app/store/actions/todo.actions';

import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AddTodoComponent, TodoListComponent],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  private store = inject(Store<AppState>);

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
