import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages.component').then((m) => m.PagesComponent),
    children: [
      {
        path: 'todo',
        loadChildren: () => import('./todo/todo.routes').then((m) => m.routes),
      },
      {
        path: '**',
        redirectTo: 'todo',
      },
    ],
  },
];
