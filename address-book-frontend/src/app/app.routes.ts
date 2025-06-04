import { Routes } from '@angular/router';
import { ListContactComponent } from './features/contacts/pages/list-contact/list-contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'contacts',
                loadComponent: () => import('./features/contacts/pages/list-contact/list-contact.component').then((c) => c.ListContactComponent)
            }
        ]
    }
];
