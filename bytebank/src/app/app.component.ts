import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '@views/components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe((event: any) => {
        const routeData = event.snapshot.routeConfig;
        this.isAuthenticated = routeData && routeData.canActivateChild ? true : false;
      });
  }
}
