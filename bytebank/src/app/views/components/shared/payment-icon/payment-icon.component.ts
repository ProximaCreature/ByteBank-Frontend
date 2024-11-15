import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-icon',
  standalone: true,
  imports: [],
  templateUrl: './payment-icon.component.html',
  styleUrl: './payment-icon.component.css'
})
export class PaymentIconComponent {
  @Input() width: string = '40px';
  @Input() height: string = '40px';
  @Input() fillColor: string = '#02273A';
}
