import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todo-list', 
        loadComponent: () => 
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './TodoListComponent',
            }).then(m => m.TodoListComponent)
    }
];
