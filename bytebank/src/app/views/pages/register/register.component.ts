import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private _snackBar = inject(MatSnackBar);
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);

  form: FormGroup = this._formBuilder.group(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      acceptTerms: new FormControl(false, Validators.requiredTrue)
    },
    { validators: this.passwordMatchValidator }
  );

  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  // Modificamos el validador personalizado para marcar `confirmPassword` como inválido cuando las contraseñas no coinciden
  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword?.value && password !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPassword?.setErrors(null);
      return null;
    }
  }

  get passwordsDoNotMatch(): boolean {
    return !!this.form.get('confirmPassword')?.hasError('passwordMismatch') && !!this.form.get('confirmPassword')?.touched;
  }

  register(): void {
    if (this.form.invalid) {
      let message = 'Por favor, completa todos los campos correctamente';

      if (this.form.hasError('passwordMismatch')) {
        message = 'Las contraseñas no coinciden';
      }

      this._snackBar.open(message, 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }

    console.log(this.form.value);
    this._router.navigate(['/login']);
  }
}
