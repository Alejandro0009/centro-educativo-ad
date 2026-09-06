import { Routes } from '@angular/router';

import { PublicLayout } from './layouts/public-layout/public-layout';
import { Home } from './features/public/home/home';

export const routes: Routes = [

  {
    path: '',
    component: PublicLayout,

    children: [

      {
        path: '',
        component: Home
      },

      {
        path: 'noticias',
        loadComponent: () =>
          import('./features/public/news/news')
            .then(m => m.News)
      }

    ]
  },

  {
    path: '**',
    redirectTo: ''
  }

];