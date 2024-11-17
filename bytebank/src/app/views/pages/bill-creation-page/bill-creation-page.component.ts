import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WalletController } from '../../../controllers/wallet.controller';
import { AuthService } from '../../../services/auth.service';
import { CreateBillCommand } from '../../../models/create-bill-command.model';
import { BillController } from '@controllers/bill.controller';

@Component({
  selector: 'app-bill-creation-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './bill-creation-page.component.html',
  styleUrls: ['./bill-creation-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillCreationPageComponent implements OnInit {
  billForm: FormGroup;
  wallets: { nombreCartera: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private walletController: WalletController,
    private billController: BillController,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.billForm = this.fb.group({
      walletName: ['', Validators.required],
      billName: ['', Validators.required],
      assetSalePrice: [0, [Validators.required, Validators.min(0)]],
      signingDate: ['', Validators.required],
      currencyType: ['SOL', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadWallets();
  }

  private loadWallets(): void {
    const userId = this.authService.user_id;

    this.walletController.getUserWallet(userId).subscribe({
      next: (response) => {
        if (response && response.length > 0) {
          this.wallets = response;
          console.log('Carteras cargadas:', this.wallets);
        } else {
          console.warn('No se encontraron carteras disponibles.');
          this._snackBar.open('No hay carteras disponibles', 'Cerrar', {
            duration: 3000,
          });
        }
      },
      error: (err) => {
        console.error('Error al cargar las carteras:', err);
        this._snackBar.open('Error al cargar las carteras', 'Cerrar', {
          duration: 2000,
        });
      },
    });
  }


  onSubmit(): void {
    if (this.billForm.valid) {
      const command: CreateBillCommand = new CreateBillCommand(
        this.billForm.value.walletName,
        this.billForm.value.billName,
        this.billForm.value.assetSalePrice,
        this.billForm.value.currencyType,
        this.billForm.value.signingDate
      );

      this.billController.createBill(command).subscribe(
        (response) => {
          console.log('Factura creada:', response);
          this._snackBar.open('Factura creada exitosamente', 'Cerrar', {
            duration: 2000,
          });
        },
        (error) => {
          console.error('Error al crear la factura:', error);
          this._snackBar.open('Error al crear la factura', 'Cerrar', {
            duration: 2000,
          });
        }
      );
    }
  }
}
