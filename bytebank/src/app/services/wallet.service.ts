import { Injectable } from '@angular/core';
import {environment} from '../../environment/environment';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';
import { WalletReq } from '@models/wallet-req.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient, private authService: AuthService) { }

  createWallet(wallet: WalletReq) {
    const headers = {
      Authorization: `Bearer ${this.authService.token}`
    }
    return this.http.post(this.baseUrl + 'wallets', wallet, { headers });
  }

  getWalletByUserId(userId: any) {
    const headers = {
      Authorization: `Bearer ${this.authService.token}`
    }
    return this.http.get(`${this.baseUrl}users/${userId}/wallets`, { headers });
  }
}
