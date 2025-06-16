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
                children: [
                    {
                        path: '',
                        loadComponent: () =>
                            import('./features/contacts/pages/list-contact/list-contact.component').then(
                                (c) => c.ListContactComponent
                            )
                    },
                    {
                        path: 'add',
                        loadComponent: () =>
                            import('./features/contacts/pages/add-contact/add-contact.component').then(
                                (c) => c.AddContactComponent
                            )
                    },
                    {
                        path: ':id',
                        loadComponent: () =>
                            import('./features/contacts/pages/detail-contact/detail-contact.component').then(
                                (c) => c.DetailContactComponent
                            )
                    }
                ]
            }
        ]
    }

];
