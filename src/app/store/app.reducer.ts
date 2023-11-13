import { ActionReducerMap } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { todoReducer } from './reducers/todo.reducers';

export interface AppState {
  todos: Todo[];
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
};
