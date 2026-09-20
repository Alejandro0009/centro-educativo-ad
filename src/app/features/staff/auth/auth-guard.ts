import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  PLATFORM_ID
} from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // Durante el prerender de Angular no existe localStorage
  if (!isPlatformBrowser(platformId)) {
    return true;
  }

  const authenticated =
    localStorage.getItem('ad_staff_auth') === 'true';

  if (authenticated) {
    return true;
  }

  return router.createUrlTree([
    '/empleados/login'
  ]);
};