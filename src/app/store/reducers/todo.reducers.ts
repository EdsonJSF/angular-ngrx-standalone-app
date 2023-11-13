import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import * as TodoAction from '../actions/todo.actions';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,

  // Load
  on(TodoAction.loadTodos, (state) => [...state]),

  on(TodoAction.loadedTodos, (state, { todos }) => [...state, ...todos]),

  // Create
  on(TodoAction.handleCreate, (state) => [...state]),

  on(TodoAction.create, (state, { title, body }) => [
    ...state,
    new Todo(title, body),
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
  on(TodoAction.handleEdit, (state) => [...state]),

  on(TodoAction.edit, (state, { id, title, body }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, body };
      } else {
        return todo;
      }
    });
  }),

  // Remove
  on(TodoAction.handleRemove, (state) => [...state]),

  on(TodoAction.remove, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),

  // Clear All
  on(TodoAction.clearAll, (state) => state.filter((todo) => !todo.complete))
);
