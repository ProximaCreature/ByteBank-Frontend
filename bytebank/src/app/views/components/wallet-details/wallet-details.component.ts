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
import {BillService} from '../../../services/bill.service';
import {Bill} from '../../../models/bill.model';

@Component({
  selector: 'app-wallet-details',
  standalone: true,
    imports: [
      MatSidenavModule
    ],
  templateUrl: './wallet-details.component.html',
  styleUrl: './wallet-details.component.css'
})
export class WalletDetailsComponent {
  wallets = WALLETS;

  constructor() {
  }
}

const WALLETS = [
  {
    name: 'Cartera Alfa',
    tcea: '12.5%',
    received_value: 150000,
    face_value: 200000,
    interests: 10000,
    expenses: 5000,
    cash_flow: 145000
  }
];