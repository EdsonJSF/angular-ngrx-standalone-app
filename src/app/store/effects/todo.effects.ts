import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { TodoService } from 'src/app/services/todo.service';
import {
  create,
  edit,
  handleCreate,
  handleEdit,
  handleRemove,
  loadedTodos,
  loadTodos,
  remove,
} from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  private actions$ = inject(Actions);
  private todoService = inject(TodoService);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      exhaustMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => loadedTodos({ todos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(handleCreate),
      exhaustMap((data) =>
        this.todoService.createTodo(data).pipe(
          map((todo) => create(todo)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  editTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(handleEdit),
      exhaustMap((data) =>
        this.todoService.updateTodo(data).pipe(
          map((todo) => edit(todo)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  removeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(handleRemove),
      exhaustMap((data) =>
        this.todoService.deleteTodo(data.id).pipe(
          map((todo) => remove(data)),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
