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
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WalletReq } from '@models/wallet-req.model';

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
    private _authService: AuthService,
    private router: Router
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

    this.watchInterestRateTypeChanges();
    this.watchMoratoriumInterestRateTypeChanges();

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

  private watchInterestRateTypeChanges(): void {
    this.walletForm.get('interestRateType')?.valueChanges.subscribe((value) => {
      if (value === 'Efectiva') {
        this.walletForm.get('capitalizationPeriod')?.disable();
        this.walletForm.patchValue({ capitalizationPeriod: 'Ninguno' });
      } else {
        this.walletForm.get('capitalizationPeriod')?.enable();
      }
    });
  }

  private watchMoratoriumInterestRateTypeChanges(): void {
    this.walletForm.get('moratoriumInterestRateType')?.valueChanges.subscribe((value) => {
      if (value === 'Efectiva') {
        this.walletForm.get('moratoriumCapitalizationPeriod')?.disable();
        this.walletForm.patchValue({ moratoriumCapitalizationPeriod: 'Ninguno' });
      } else {
        this.walletForm.get('moratoriumCapitalizationPeriod')?.enable();
      }
    });
  }

  onSubmit() {
    if (this.walletForm.valid) {
      const username = this._authService.username;

      const walletReq: WalletReq = {
        username: username,
        nombreCartera: this.walletForm.value.walletName,
        tasaInteres: this.walletForm.value.interestRate,
        tipoTasaInteres: this.walletForm.value.interestRateType,
        periodoTasa: this.walletForm.value.interestRatePeriod,
        periodoCapitalizacion: this.walletForm.value.capitalizationPeriod || 'Ninguno',
        comisionActivacionPorLetra: this.walletForm.value.activationFee,
        portes: this.walletForm.value.portabilityFee,
        porcentajeRetencion: this.walletForm.value.retentionPercentage,
        gastosAdministracion: this.walletForm.value.administrativeExpenses,
        porcentajeSeguroDegravamen: this.walletForm.value.mortgageInsurance,
        porcentajeSeguroRiesgo: this.walletForm.value.riskInsurance,
        plazoOperacion: this.walletForm.value.operationTerm,
        fechaDescuento: this.walletForm.value.discountDate,
        pagoFueraDeFecha: this.walletForm.value.paymentOutOfDate,
        diasDespuesDelVencimiento: this.walletForm.value.overdueDays || 0,
        comisionDePagoTardio: this.walletForm.value.latePaymentFee || 0,
        tasaDeInteresMoratorio: this.walletForm.value.moratoriumInterestRate || 0,
        tipoTasaInteresMoratorio: this.walletForm.value.moratoriumInterestRateType || 'Ninguno',
        periodoTasaMoratorio: this.walletForm.value.moratoriumRatePeriod || 'Ninguno',
        PeriodoCapitalizaciondeTasaMoratoria: this.walletForm.value.moratoriumCapitalizationPeriod || 'Ninguno',
      };

      this.walletController.postWallet(walletReq).subscribe({
        next: (response) => {
          this.walletForm.reset();
          this._snackBar.open('Cartera creada', 'Cerrar', {
            duration: 2000,
          });
          this.router.navigate(['/walletList']);
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
