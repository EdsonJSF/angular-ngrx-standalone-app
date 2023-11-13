import { ActionReducerMap } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { todoReducer } from './reducers/todo.reducers';
import { TodoEffects } from './effects/todo.effects';

export interface AppState {
  todos: Todo[];
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
};

export const AppEffects = [
  TodoEffects
];
