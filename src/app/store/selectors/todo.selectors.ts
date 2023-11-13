import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Todo } from 'src/app/models/todo.model';

export const todoFeature = (state: AppState) => state.todos;

export const selectTodoList = createSelector(
  todoFeature,
  (state: Todo[]) => state
);
