import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  
  
  const authServie = inject(AuthService);
  const router = inject(Router);  
  
  if (authServie.authStatus() === AuthStatus.authenticated) {
    return true;
  }
  
  // if (authServie.authStatus() === AuthStatus.checking) {
  //   return false;
  // }
  
  // const url = state.url;
  // localStorage.setItem('url', url);
  router.navigateByUrl('/auth/login');
  
  return false;
};
