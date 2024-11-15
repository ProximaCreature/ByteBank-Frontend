import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { AuthService } from '@services/auth.service';
import { LogoComponent } from '../shared/logo/logo.component';
import { UserIconComponent } from '../shared/user-icon/user-icon.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    LogoComponent,
    UserIconComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  menuOpen = false;
  profileOpen = false;

  constructor(private authService: AuthService, private router: Router) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.profileOpen) {
      this.profileOpen = false;
    }
  }

  toggleProfile() {
    this.profileOpen = !this.profileOpen;
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
