import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wallet-icon',
  standalone: true,
  imports: [],
  templateUrl: './wallet-icon.component.html',
  styleUrl: './wallet-icon.component.css'
})
export class WalletIconComponent {
  @Input() width: string = '40px';
  @Input() height: string = '40px';
  @Input() fillColor: string = '#02273A';
}
