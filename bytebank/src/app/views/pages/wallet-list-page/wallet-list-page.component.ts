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
import {Wallet} from '@models/wallet.model';
import {WalletController} from '@controllers/wallet.controller';
import {Router, RouterLink} from '@angular/router';

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
    this.checkUserId();

    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = 'Items';
    }
  }

  constructor(private walletController: WalletController, private router: Router) {
  }

  checkUserId(): void {
    const userId = localStorage.getItem('userId');

    const parsedUserId = userId ? parseInt(userId) : NaN;

    console.log('Parsed User ID:', parsedUserId);

    if (isNaN(parsedUserId)) {

      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      localStorage.removeItem('token');

      this.router.navigate(['/login']);
    }
    this.getWallets(parsedUserId);
  }

  getWallets(userId: number) {
    this.walletController.getUserWallet(userId).subscribe(
      res => {
        console.log('Response from API:', res);

        if (Array.isArray(res)) {
          const walletData: Wallet[] = res.map((wallet: any) => new Wallet(
            wallet.id,
            wallet.userId,
            wallet.nombreCartera,
            wallet.plazoOperacion,
            wallet.fechaDescuento,
            wallet.tcea,
            wallet.valorRecibido,
            wallet.valorEntregado
          ));

          console.log('Processed wallet data (array):', walletData);
          this.dataSource.data = walletData;

        } else if (res && typeof res === 'object') {
          const walletData: Wallet[] = [
            new Wallet(
              res.id,
              userId,
              res.nombreCartera,
              res.plazoOperacion,
              res.fechaDescuento,
              res.tcea,
              res.valorRecibido,
              res.valorEntregado
            )
          ];

          console.log('Processed wallet data (object):', walletData);
          this.dataSource.data = walletData;

        } else {
          console.error('Response is neither an array nor an object:', res);
        }
      },
      error => {
        console.error('Error while fetching wallets:', error);
      }
    );
  }

  getRow(row: any){
    this.router.navigateByUrl(`/walletDetail/${row.nombreCartera}`);
  }
}

