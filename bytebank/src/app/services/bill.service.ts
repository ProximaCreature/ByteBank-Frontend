import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getByWalletId(walletId: number) {
    return this.http.get(`${this.baseUrl}/bills?walletId=${walletId}`);
  }
}
