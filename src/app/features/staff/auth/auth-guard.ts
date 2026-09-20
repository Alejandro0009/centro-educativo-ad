import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const authenticated =
    localStorage.getItem('ad_staff_auth') === 'true';

  if (authenticated) {
    return true;
  }

  return router.createUrlTree([
    '/empleados/login'
  ]);

};