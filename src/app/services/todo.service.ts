import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Todo } from '../models/todo.model';

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
}
