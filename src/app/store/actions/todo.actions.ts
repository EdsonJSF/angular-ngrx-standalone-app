import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { CreateTodoInterface, EditTodoInterface, ToggleTodoInterface } from 'src/app/interfaces/todo.interfaces';

export const loadTodos = createAction('[TODO] Load Todos');

export const loadedTodos = createAction('[TODO] Load Success', props<{todos: Todo[]}>());

export const handleCreate = createAction('[TODO] Handle Create a Todo', props<CreateTodoInterface>());

export const create = createAction('[TODO] Create a Todo', props<CreateTodoInterface>());

export const toggle = createAction('[TODO] Toggle a Todo', props<ToggleTodoInterface>());

export const toggleAll = createAction('[TODO] Toggle All Todos');

export const handleEdit = createAction('[TODO] Handle Edit a Todo', props<EditTodoInterface>());

export const edit = createAction('[TODO] Edit a Todo', props<EditTodoInterface>());

export const handleRemove = createAction('[TODO] Handle Remove a Todo', props<{ id: number }>());

export const remove = createAction('[TODO] Remove a Todo', props<{ id: number }>());

export const clearAll = createAction('[TODO] Clear All Complete Todos');

