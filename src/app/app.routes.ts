import { Routes } from '@angular/router';
import { authGuard } from './features/staff/auth/auth-guard';

export const routes: Routes = [

  // =========================================================
  // ÁREA INTERNA · EMPLEADOS
  // =========================================================

  {
    path: 'empleados',

    children: [

      // -------------------------------------------------------
      // LOGIN
      // /empleados/login
      // -------------------------------------------------------

      {
        path: 'login',

        loadComponent: () =>
          import('./features/staff/auth/login/login')
            .then(m => m.Login)
      },


      // -------------------------------------------------------
      // HOME INTERNO
      // /empleados/home
      // -------------------------------------------------------

      {
        path: 'home',

        canActivate: [authGuard],

        loadComponent: () =>
          import('./features/staff/home/home')
            .then(m => m.Home)
      },


      // -------------------------------------------------------
      // HORARIOS
      // /empleados/horarios
      // -------------------------------------------------------

      {
        path: 'horarios',

        canActivate: [authGuard],

        loadComponent: () =>
          import('./features/staff/schedule/schedule')
            .then(m => m.Schedule)
      },


      // -------------------------------------------------------
      // /empleados → /empleados/login
      // -------------------------------------------------------

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }

    ]
  },

    // =========================================================
  // ÁREA INTERNA · ALUMNOS
  // =========================================================

  {
    path: 'alumnos',

    children: [
      // LOGIN · /alumnos/login
      {
        path: 'login',

        loadComponent: () =>
          import('./features/students/auth/login/login')
            .then(m => m.Login)
      },

      // HOME · /alumnos/home
      {
        path: 'home',

        loadComponent: () =>
          import('./features/students/home/home')
            .then(m => m.Home)
      },

      // /alumnos → /alumnos/login
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }
    ]
  },


  // =========================================================
  // SITIO PÚBLICO
  // =========================================================

  {
    path: '',

    loadComponent: () =>
      import('./layouts/public-layout/public-layout')
        .then(m => m.PublicLayout),

    children: [

      // -------------------------------------------------------
      // HOME
      // /
      // -------------------------------------------------------

      {
        path: '',
        pathMatch: 'full',

        loadComponent: () =>
          import('./features/public/home/home')
            .then(m => m.Home)
      },


      // -------------------------------------------------------
      // ECOEMS
      // /ecoems
      // -------------------------------------------------------

      {
        path: 'ecoems',

        loadComponent: () =>
          import('./features/public/ecoems/ecoems')
            .then(m => m.Ecoems)
      },


      // -------------------------------------------------------
      // UNIVERSIDAD
      // /universidad
      // -------------------------------------------------------

      {
        path: 'universidad',

        loadComponent: () =>
          import('./features/public/universidad/universidad')
            .then(m => m.Universidad)
      },


      // -------------------------------------------------------
      // INGLÉS
      // /ingles
      // -------------------------------------------------------

      {
        path: 'ingles',

        loadComponent: () =>
          import('./features/public/ingles/ingles')
            .then(m => m.Ingles)
      },


      // -------------------------------------------------------
      // NOTICIAS
      // /noticias
      // -------------------------------------------------------

      {
        path: 'noticias',

        loadComponent: () =>
          import('./features/public/news/news')
            .then(m => m.News)
      }

    ]
  },


  // =========================================================
  // CUALQUIER RUTA NO EXISTENTE
  // =========================================================

  {
    path: '**',
    redirectTo: ''
  }

];