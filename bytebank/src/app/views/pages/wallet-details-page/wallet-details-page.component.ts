import { Component } from '@angular/core';
import {MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {WalletDetailsComponent} from '../../components/wallet-details/wallet-details.component';
import {WalletBillsTableComponent} from '../../components/wallet-bills-table/wallet-bills-table.component';

@Component({
  selector: 'app-wallet-details-page',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    WalletDetailsComponent,
    WalletBillsTableComponent
  ],
  templateUrl: './wallet-details-page.component.html',
  styleUrl: './wallet-details-page.component.css'
})
export class WalletDetailsPageComponent {

}
