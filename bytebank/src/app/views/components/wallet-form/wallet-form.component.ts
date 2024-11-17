import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideNativeDateAdapter } from '@angular/material/core';
import { WalletController } from '../../../controllers/wallet.controller';
import { AuthService } from '@services/auth.service';
import { CommonModule } from '@angular/common';

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
    MatDatepickerModule,
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletFormComponent {
  walletForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private walletController: WalletController,
    private _snackBar: MatSnackBar,
    private _authService: AuthService
  ) {
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
      discountDate: ['', Validators.required],
      paymentOutOfDate: [false],
      overdueDays: [{ value: '', disabled: true }, Validators.required],
      latePaymentFee: [{ value: '', disabled: true }, Validators.required],
      moratoriumInterestRate: [{ value: '', disabled: true }, Validators.required],
      moratoriumInterestRateType: [{ value: '', disabled: true }, Validators.required],
      moratoriumRatePeriod: [{ value: '', disabled: true }, Validators.required],
      moratoriumCapitalizationPeriod: [{ value: '', disabled: true }, Validators.required],
    });

    this.walletForm.get('paymentOutOfDate')?.valueChanges.subscribe((checked) => {
      if (checked) {
        this.enableOverdueFields();
      } else {
        this.disableOverdueFields();
      }
    });
  }

  private enableOverdueFields(): void {
    this.walletForm.get('overdueDays')?.enable();
    this.walletForm.get('latePaymentFee')?.enable();
    this.walletForm.get('moratoriumInterestRate')?.enable();
    this.walletForm.get('moratoriumInterestRateType')?.enable();
    this.walletForm.get('moratoriumRatePeriod')?.enable();
    this.walletForm.get('moratoriumCapitalizationPeriod')?.enable();
  }

  private disableOverdueFields(): void {
    this.walletForm.get('overdueDays')?.disable();
    this.walletForm.get('latePaymentFee')?.disable();
    this.walletForm.get('moratoriumInterestRate')?.disable();
    this.walletForm.get('moratoriumInterestRateType')?.disable();
    this.walletForm.get('moratoriumRatePeriod')?.disable();
    this.walletForm.get('moratoriumCapitalizationPeriod')?.disable();
    this.walletForm.patchValue({
      overdueDays: '',
      latePaymentFee: '',
      moratoriumInterestRate: '',
      moratoriumInterestRateType: '',
      moratoriumRatePeriod: '',
      moratoriumCapitalizationPeriod: ''
    });
  }

  onSubmit() {
    if (this.walletForm.valid) {
      const username = this._authService.username;
      const walletData = {
        username: username,
        ...this.walletForm.value,
      };

      this.walletController.postWallet(walletData).subscribe({
        next: (response) => {
          console.log('Cartera creada:', response);
          this._snackBar.open('Cartera creada', 'Cerrar', {
            duration: 2000,
          });
        },
        error: (error) => {
          console.error('Error al crear la cartera:', error);
          this._snackBar.open('Error al crear la cartera', 'Cerrar', {
            duration: 2000,
          });
        },
      });
    }
  }
}
