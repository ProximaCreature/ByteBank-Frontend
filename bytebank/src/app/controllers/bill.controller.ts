import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BillService} from '../services/bill.service';

@Injectable({
  providedIn: 'root'
})
export class BillController {
  constructor(private billService : BillService) {}

  getWalletBill(id: any): Observable<any> {
    return this.billService.getByWalletId(id);
  }
}
