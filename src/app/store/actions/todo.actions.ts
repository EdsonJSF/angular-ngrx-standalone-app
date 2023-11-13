import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create a Todo', props<{ title: string, description: string }>());

export const toggle = createAction('[TODO] Toggle a Todo', props<{ id: number, complete: boolean }>());

export const toggleAll = createAction('[TODO] Toggle All Todos');

export const edit = createAction('[TODO] Edit a Todo', props<{ id: number; title: string, description: string }>());

export const remove = createAction('[TODO] Remove a Todo', props<{ id: number }>());

export const clearAll = createAction('[TODO] Clear All Complete Todos');

