import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import * as TodoAction from '../actions/todo.actions';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,

  // Create
  on(TodoAction.create, (state, { title, description }) => [
    ...state,
    new Todo(title, description),
  ]),

  // Toggle
  on(TodoAction.toggle, (state, { id, complete }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete };
      } else {
        return todo;
      }
    });
  }),

  // Toggle All
  on(TodoAction.toggleAll, (state) => {
    return state.map((todo) => {
      return { ...todo, complete: !todo.complete };
    });
  }),

  // Edit
  on(TodoAction.edit, (state, { id, title, description }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, description };
      } else {
        return todo;
      }
    });
  }),

  // Remove
  on(TodoAction.remove, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),

  // Clear All
  on(TodoAction.clearAll, (state) => state.filter((todo) => !todo.complete))
);
