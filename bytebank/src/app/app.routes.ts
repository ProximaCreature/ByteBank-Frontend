import { Routes } from '@angular/router';
import {WalletDetailsPageComponent} from './views/pages/wallet-details-page/wallet-details-page.component';
import {WalletCreationPageComponent} from './views/pages/wallet-creation-page/wallet-creation-page.component';
import {WalletListPageComponent} from './views/pages/wallet-list-page/wallet-list-page.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'walletDetail/:id', component: WalletDetailsPageComponent},
    {path: 'addWallet', component: WalletCreationPageComponent},
    {path: 'walletList/:id', component: WalletListPageComponent}
];
