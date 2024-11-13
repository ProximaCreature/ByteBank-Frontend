import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

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

  constructor(private fb: FormBuilder) {
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
      pagoFueraFecha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.carteraForm.valid) {
      console.log('Formulario válido:', this.carteraForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
