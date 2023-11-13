import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// NgRx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { selectTodoList } from 'src/app/store/selectors/todo.selectors';

import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  private store = inject(Store<AppState>);
  todos$: Observable<Todo[]> = new Observable();

  ngOnInit(): void {
    this.todos$ = this.store.select(selectTodoList);
  }
}
