import { Routes } from '@angular/router';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: PortfolioDetailsComponent}
];
