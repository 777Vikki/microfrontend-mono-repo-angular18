import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'todo-list', pathMatch: "full" },
    { path: 'todo-list', loadComponent: () => import('./todo-list/todo-list.component').then(m => m.TodoListComponent) }
];
