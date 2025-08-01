import { CanActivateFn, Router } from '@angular/router';
import { AdministrationService } from '../services/administration/administration.service';
import { inject } from '@angular/core';

export const adminauthGuard: CanActivateFn = (route, state) => {
 const router = inject(Router);
  const userService = inject(AdministrationService);

  if (userService.checkIfAdministrationLoggedIn()) {
    return true;
  } else {
    router.navigate(['/administration']);
    return false;
  }
};
