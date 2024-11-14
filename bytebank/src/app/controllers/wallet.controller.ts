import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {WalletService} from '../services/wallet.service';

@Injectable({
  providedIn: 'root'
})
export class WalletController {
  constructor(private walletService: WalletService) {}

  postWallet(wallet: any) {
    return this.walletService.createWallet(wallet);
  }
}
