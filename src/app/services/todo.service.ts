import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Todo } from '../models/todo.model';
import {
  CreateTodoInterface,
  EditTodoInterface,
} from '../interfaces/todo.interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);

  private url: string = 'https://jsonplaceholder.typicode.com';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}/posts`).pipe(
      map((todos) => {
        return todos.map((todo) => {
          return { ...todo, complete: false };
        });
      })
    );
  }

  createTodo(data: CreateTodoInterface): Observable<Todo> {
    return this.http.post<Todo>(`${this.url}/posts`, data);
  }

  updateTodo(data: EditTodoInterface): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/posts/${data.id}`, { ...data, userId: 1 });
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/posts/${id}`);
  }
}
