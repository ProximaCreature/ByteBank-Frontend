import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
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

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
