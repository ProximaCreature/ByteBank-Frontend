import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {Bill} from '../../../models/bill.model';
import {BillController} from '../../../controllers/bill.controller';

@Component({
  selector: 'app-wallet-bills-table',
  standalone: true,
    imports: [
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
    ],
  templateUrl: './wallet-bills-table.component.html',
  styleUrl: './wallet-bills-table.component.css'
})
export class WalletBillsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'face_value', 'signature_date'];
  dataSource = new MatTableDataSource<Bill>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getBills();
  }

  constructor(private billController: BillController) {
  }

  getBills() {
    const walletId = 1; // Reemplaza con el ID de la cartera correspondiente
    this.billController.getWalletBill(walletId).subscribe(
      res => {
        if (Array.isArray(res)) {
          const billData: Bill[] = res.map((bill: any) => new Bill(bill.id, bill.walletId, bill.name, bill.faceValue, bill.expirationDate, bill.currency));
          this.dataSource.data = billData;
        } else {
          console.error('Response is not an array');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
