import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environment/environment';
import {AuthService} from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient, private authService: AuthService) { }

  getByWalletId(walletId: number) {
    const headers = {
      Authorization: `Bearer ${this.authService.token}`
    }
    return this.http.get(`${this.baseUrl}/bills?walletId=${walletId}`, { headers });
  }
}
