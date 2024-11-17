import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletService } from '../services/wallet.service';
import { WalletReq } from '@models/wallet-req.model';

@Injectable({
  providedIn: 'root'
})
export class WalletController {
  constructor(private walletService: WalletService) { }

  postWallet(wallet: WalletReq): Observable<any> {
    return this.walletService.createWallet(wallet);
  }

  getUserWallet(id: number): Observable<any> {
    return this.walletService.getWalletByUserId(id);
  }
}
