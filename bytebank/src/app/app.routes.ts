import { Routes } from '@angular/router';
import { AuthRedirectGuard } from '@controllers/auth-redirect.guard';
import { isAthenticatedGuard } from '@controllers/is-athenticated.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // !Rutas sin autenticación
  {
    path: '',
    children: [
      {
        path: 'login',
        canActivate: [AuthRedirectGuard],
        loadComponent: () => import('@views/pages/login/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'register',
        canActivate: [AuthRedirectGuard],
        loadComponent: () => import('@views/pages/register/register.component').then(m => m.RegisterComponent),
      },
    ]
  },
  // !Rutas que requieren autenticación, acá agregan sus rutas
  {
    path: '',
    canActivateChild: [isAthenticatedGuard],
    children: [
      {
        path: 'walletDetail/:id',
        loadComponent: () => import('./views/pages/wallet-details-page/wallet-details-page.component').then(m => m.WalletDetailsPageComponent),
      },
      {
        path: 'addWallet',
        loadComponent: () => import('./views/pages/wallet-creation-page/wallet-creation-page.component').then(m => m.WalletCreationPageComponent),
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
