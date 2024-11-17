import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BillService} from '../services/bill.service';
import { CreateBillCommand } from '@models/create-bill-command.model';

@Injectable({
  providedIn: 'root'
})
export class BillController {
  constructor(private billService : BillService) {}

  getWalletBill(id: any): Observable<any> {
    return this.billService.getByWalletId(id);
  }

  createBill(command: CreateBillCommand): Observable<any> {
    return this.billService.createBill(command);
  }
}
