import { Routes } from '@angular/router';
import {WalletDetailsComponent} from './components/wallet-details/wallet-details.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: WalletDetailsComponent}
];
