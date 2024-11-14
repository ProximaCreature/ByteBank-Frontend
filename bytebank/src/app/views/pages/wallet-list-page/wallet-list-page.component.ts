import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSidenavContainer, MatSidenavContent, MatSidenavModule} from "@angular/material/sidenav";
import {
  MatCell, MatCellDef,
  MatHeaderCell, MatHeaderRow, MatHeaderRowDef,
  MatColumnDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource, MatTableModule,
} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortHeader, MatSortModule} from "@angular/material/sort";
import {MatButton} from '@angular/material/button';
import {Wallet} from '../../../models/wallet.model';
import {WalletController} from '../../../controllers/wallet.controller';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-wallet-list-page',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenavModule,
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterLink
  ],
  templateUrl: './wallet-list-page.component.html',
  styleUrl: './wallet-list-page.component.css'
})
export class WalletListPageComponent implements AfterViewInit{

  displayedColumns: string[] = ['position', 'name', 'tcea_value', 'received_value', "delivered_value", "discount_date", "operation_term"];
  dataSource = new MatTableDataSource<Wallet>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getWallets();

    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = 'Items';
    }
  }

  constructor(private walletController: WalletController) {
  }
  //getUserWallet(id: number)
  getWallets() {
    const userId = 1; // Reemplaza con el ID del usuario correspondiente
    this.walletController.getUserWallet(userId).subscribe(
      res => {
        if (Array.isArray(res)) {
          const walletData: Wallet[] = res.map((wallet: any) => new Wallet(wallet.id, wallet.userId,
            wallet.name, wallet.interestRate,  wallet.interestType, wallet.interestPeriod, wallet.capitalizationPeriod,
            wallet.activationFee, wallet.portabilityFee, wallet.retentionPercentage, wallet.administrativeExpenses, wallet.mortgageInsurance,
            wallet.riskInsurance, wallet.operationTerm, wallet.discountDate, wallet.tcea, wallet.receivedValue, wallet.deliveredValue));

          this.dataSource.data = walletData;
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

