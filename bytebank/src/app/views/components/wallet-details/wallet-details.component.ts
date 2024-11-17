import {Component} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {BillController} from '@controllers/bill.controller';
import {ActivatedRoute} from '@angular/router';
import {Wallet} from '@models/wallet.model';
import {DatePipe, DecimalPipe, PercentPipe} from '@angular/common';

@Component({
  selector: 'app-wallet-details',
  standalone: true,
  imports: [
    MatSidenavModule,
    DecimalPipe,
    DatePipe,
    PercentPipe
  ],
  templateUrl: './wallet-details.component.html',
  styleUrl: './wallet-details.component.css'
})
export class WalletDetailsComponent {
  wallet: any = {};

  constructor(private billController: BillController, private route: ActivatedRoute) {
    this.getWallet()
  }

  getWallet() {
    const walletId = this.route.snapshot.paramMap.get('walletName');
    this.billController.getWalletBill(walletId).subscribe(
      res => {
        if (res) {
          this.wallet = new Wallet(
            res.id,
            res.userId,
            res.nombreCartera,
            res.plazoOperacion,
            res.fechaDescuento,
            res.tcea,
            res.valorRecibido,
            res.valorEntregado
          );
        } else {
          console.error('Response is empty');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
