import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSidenavContainer, MatSidenavContent, MatSidenavModule} from "@angular/material/sidenav";
import {MatSort, MatSortHeader, MatSortModule} from "@angular/material/sort";
import {BillService} from '../../services/bill.service';
import {Bill} from '../../model/bill.model';

@Component({
  selector: 'app-wallet-details',
  standalone: true,
    imports: [
      MatSidenavModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
    ],
  templateUrl: './wallet-details.component.html',
  styleUrl: './wallet-details.component.css'
})
export class WalletDetailsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'face_value', 'signature_date'];
  dataSource = new MatTableDataSource<Bill>();
  wallets = WALLETS;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getBills();
  }

  constructor(private billService: BillService) {
  }

  getBills() {
    const walletId = 1; // Reemplaza con el ID de la cartera correspondiente
    this.billService.getByWalletId(walletId).subscribe(
      res => {
        if (Array.isArray(res)) {
          const billData: Bill[] = res.map((bill: any) => new Bill(bill.id, bill.walletId, bill.name, bill.face_value, bill.signature_date));
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

const BILLS = [
  {position: 1, name: 'Factura Aurora', face_value: 200000, signature_date: '15/06/2024'},
  {position: 2, name: 'Factura Brisa', face_value: 230000, signature_date: '20/07/2024'},
  {position: 3, name: 'Factura Cielo', face_value: 250000, signature_date: '25/08/2024'}
];

const WALLETS = [
  {
    tcea: '12.5%',
    received_value: 150000,
    face_value: 200000,
    interests: 10000,
    expenses: 5000,
    cash_flow: 145000
  }
];
