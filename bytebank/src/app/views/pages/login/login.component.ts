import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatSlideToggleModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _snackBar = inject(MatSnackBar);
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  form: FormGroup = this._formBuilder.group({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', Validators.required),
  });

  passwordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  login(): void {
    this._authService.signIn(this.form.value).subscribe(
      {
        next: success => {
          if (success) {
            this._router.navigate(['/addWallet']);
          }
        },
        error: (error) => {
          this._snackBar.open("Usuario o contraseña incorrectas", 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        }
      }
    );
  }
}
