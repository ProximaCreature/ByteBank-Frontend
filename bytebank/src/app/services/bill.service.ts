import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { AuthService } from '@services/auth.service';
import { Observable } from 'rxjs';
import { Bill } from '@models/bill.model';
import { CreateBillCommand } from '@models/create-bill-command.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getByWalletId(walletName: any): Observable<Bill[]> {
    const headers = {
      Authorization: `Bearer ${this.authService.token}`
    };
    return this.http.get<Bill[]>(`${this.baseUrl}/wallets/${walletName}`, { headers });
  }

  createBill(command: CreateBillCommand) {
    const headers = {
      Authorization: `Bearer ${this.authService.token}`
    };
    return this.http.post(`${this.baseUrl}/bills`, command, { headers });
  }
}
