import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// NgRx
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { selectTodoList } from 'src/app/store/selectors/todo.selectors';

import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styles: [],
})
export class TodoListComponent {
  private store = inject(Store);
  todos$: Observable<Todo[]> = new Observable();

  ngOnInit(): void {
    this.todos$ = this.store.select(selectTodoList);
  }
}
