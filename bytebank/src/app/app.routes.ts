import { Routes } from '@angular/router';
import {WalletCreationPageComponent} from './pages/wallet-creation-page/wallet-creation-page.component';

export const routes: Routes = [
  {path: '', redirectTo: '/add-wallet', pathMatch: 'full'},
  {path: 'add-wallet', component: WalletCreationPageComponent}
];
