import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {WalletService} from '../../services/wallet.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Wallet} from '../../model/wallet.model';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletFormComponent {
  carteraForm: FormGroup;

  constructor(private fb: FormBuilder, private walletService: WalletService, private _snackBar: MatSnackBar) {
    this.carteraForm = this.fb.group({
      nombreCartera: ['', Validators.required],
      tasaInteres: ['', Validators.required],
      tipoTasaInteres: ['', Validators.required],
      periodoTasa: ['', Validators.required],
      periodoCapitalizacion: ['', Validators.required],
      comisionActivacion: ['', Validators.required],
      portes: ['', Validators.required],
      porcentajeRetencion: ['', Validators.required],
      gastosAdministracion: ['', Validators.required],
      seguroDegravamen: ['', Validators.required],
      seguroRiesgo: ['', Validators.required],
      plazoOperacion: ['', Validators.required],
      fechaDescuento: ['', Validators.required],
      pagoFueraFecha: [false],
    });
  }

  onSubmit() {
    if (this.carteraForm.valid) {
      const walletData = new Wallet(
        null,
        this.carteraForm.value.nombreCartera,
        this.carteraForm.value.tasaInteres,
        this.carteraForm.value.tipoTasaInteres,
        this.carteraForm.value.periodoTasa,
        this.carteraForm.value.periodoCapitalizacion,
        this.carteraForm.value.comisionActivacion,
        this.carteraForm.value.portes,
        this.carteraForm.value.porcentajeRetencion,
        this.carteraForm.value.gastosAdministracion,
        this.carteraForm.value.seguroDegravamen,
        this.carteraForm.value.seguroRiesgo,
        this.carteraForm.value.plazoOperacion,
        this.carteraForm.value.fechaDescuento
      );

      this.walletService.createWallet(walletData).subscribe((response) => {
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
      console.log('Formulario válido:', this.carteraForm.value);
    } else {
      console.log('Formulario inválido');
      this.printFormErrors();
    }
  }

  printFormErrors() {
    Object.keys(this.carteraForm.controls).forEach(key => {
      const controlErrors = this.carteraForm.get(key)?.errors;
      if (controlErrors) {
        console.log(`Error en el campo ${key}:`, controlErrors);
      }
    });
  }
}
