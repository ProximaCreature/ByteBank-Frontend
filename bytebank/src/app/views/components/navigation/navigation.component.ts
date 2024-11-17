import { Component, ElementRef, HostListener, OnDestroy } from '@angular/core';

import {Router, RouterLink} from '@angular/router';
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
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {
  menuOpen = false;
  profileOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private elementRef: ElementRef
  ) { }

  get username(): string {
    return this.authService.username;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
      this.profileOpen = false;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (this.profileOpen) {
      this.profileOpen = false;
    }
  }

  toggleProfile(): void {
    this.profileOpen = !this.profileOpen;
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void { }
}
