import { Injectable } from '@angular/core';
import {environment} from '../../environment/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  createWallet(wallet: any) {
    return this.http.post(this.baseUrl + 'wallets', wallet);
  }

  getWalletByUserId(userId: number) {
    return this.http.get(`${this.baseUrl}wallets?userId=${userId}`);
  }
}
