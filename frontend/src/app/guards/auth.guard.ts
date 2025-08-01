
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  if (userService.checkIfUserLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};