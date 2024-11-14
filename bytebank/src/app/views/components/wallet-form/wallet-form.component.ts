import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {WalletService} from '../../../services/wallet.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Wallet} from '../../../models/wallet.model';
import {provideNativeDateAdapter} from '@angular/material/core';
import {WalletController} from '../../../controllers/wallet.controller';

@Component({
  selector: 'app-wallet-form',
  standalone: true,
    imports: [
      ReactiveFormsModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDatepickerModule
    ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './wallet-form.component.html',
  styleUrl: './wallet-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletFormComponent {
  walletForm: FormGroup;

  constructor(private fb: FormBuilder, private walletController: WalletController, private _snackBar: MatSnackBar) {
    this.walletForm = this.fb.group({
      walletName: ['', Validators.required],
      interestRate: ['', Validators.required],
      interestRateType: ['', Validators.required],
      interestRatePeriod: ['', Validators.required],
      capitalizationPeriod: ['', Validators.required],
      activationFee: ['', Validators.required],
      portabilityFee: ['', Validators.required],
      retentionPercentage: ['', Validators.required],
      administrativeExpenses: ['', Validators.required],
      mortgageInsurance: ['', Validators.required],
      riskInsurance: ['', Validators.required],
      operationTerm: ['', Validators.required],
      discountDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.walletForm.valid) {
      const walletData = new Wallet(
        null,
        this.walletForm.value.walletName,
        this.walletForm.value.interestRate,
        this.walletForm.value.interestRateType,
        this.walletForm.value.interestRatePeriod,
        this.walletForm.value.capitalizationPeriod,
        this.walletForm.value.activationFee,
        this.walletForm.value.portabilityFee,
        this.walletForm.value.retentionPercentage,
        this.walletForm.value.administrativeExpenses,
        this.walletForm.value.mortgageInsurance,
        this.walletForm.value.riskInsurance,
        this.walletForm.value.operationTerm,
        this.walletForm.value.discountDate,
        null,
        null,
        null
      );

      this.walletController.postWallet(walletData).subscribe((response) => {
          console.log('Cartera creada:', response);
          this._snackBar.open('Cartera creada', 'Cerrar', {
            duration: 2000,
          });
        },
        (error) => {
          console.error('Error al crear la cartera:', error);
          this._snackBar.open('Error al crear la cartera', 'Cerrar', {
            duration: 2000,
          });
        });
      console.log('Formulario válido:', this.walletForm.value);
    } else {
      console.log('Formulario inválido');
      this.printFormErrors();
    }
  }

  printFormErrors() {
    Object.keys(this.walletForm.controls).forEach(key => {
      const controlErrors = this.walletForm.get(key)?.errors;
      if (controlErrors) {
        console.log(`Error en el campo ${key}:`, controlErrors);
      }
    });
  }
}
