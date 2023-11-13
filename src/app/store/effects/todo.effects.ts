import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { TodoService } from 'src/app/services/todo.service';

@Injectable()
export class TodoEffects {
  private actions$ = inject(Actions);
  private todoService = inject(TodoService);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[TODO] Load Todos'),
      exhaustMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => ({ type: '[TODO] Load Success', todos })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
