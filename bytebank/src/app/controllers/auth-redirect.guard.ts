import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const token = this.authService.token;

    // !Esta es la ruta base al que se redirigirá
    if (token) {
      this.router.navigate(['/addWallet']);
      return false;
    }
    return true;
  }
}
