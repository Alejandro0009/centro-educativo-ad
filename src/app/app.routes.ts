import { Routes } from '@angular/router';

import { PublicLayout } from './layouts/public-layout/public-layout';
import { Home } from './features/public/home/home';

export const routes: Routes = [

  {
    path: '',
    component: PublicLayout,

    children: [

      // HOME
      {
        path: '',
        component: Home
      },

      // ECOEMS
      {
        path: 'ecoems',
        loadComponent: () =>
          import('./features/public/ecoems/ecoems')
            .then(m => m.Ecoems)
      },

      // NOTICIAS
      {
        path: 'noticias',
        loadComponent: () =>
          import('./features/public/news/news')
            .then(m => m.News)
      }

    ]
  },


  // CUALQUIER RUTA NO EXISTENTE
  {
    path: '**',
    redirectTo: ''
  }

];