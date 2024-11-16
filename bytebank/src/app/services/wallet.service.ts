import { Injectable } from '@angular/core';
import {environment} from '../../environment/environment';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient, private authService: AuthService) { }

  createWallet(wallet: any) {
    const headers = {
      Authorization: `Bearer ${this.authService.token}`
    }
    return this.http.post(this.baseUrl + 'wallets', wallet, { headers });
  }

  getWalletByUserId(userId: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.token}`
    }
    return this.http.get(`${this.baseUrl}wallets?userId=${userId}`, { headers });
  }
}
