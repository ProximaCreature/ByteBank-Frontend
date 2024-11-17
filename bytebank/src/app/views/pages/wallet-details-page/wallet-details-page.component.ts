import { Component } from '@angular/core';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { WalletDetailsComponent } from '../../components/wallet-details/wallet-details.component';
import { WalletBillsTableComponent } from '../../components/wallet-bills-table/wallet-bills-table.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-wallet-details-page',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    WalletDetailsComponent,
    WalletBillsTableComponent,
    RouterLink
  ],
  templateUrl: './wallet-details-page.component.html',
  styleUrl: './wallet-details-page.component.css'
})
export class WalletDetailsPageComponent {

  get walletName(): string {
    return this.route.snapshot.paramMap.get('walletName')!;
  }

  constructor(private route: ActivatedRoute) {

  }
}
