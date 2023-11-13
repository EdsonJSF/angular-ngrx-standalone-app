export interface CreateTodoInterface {
  title: string;
  body: string;
}

export interface EditTodoInterface extends CreateTodoInterface {
  id: number;
}

export interface ToggleTodoInterface {
  id: number;
  complete: boolean;
}
