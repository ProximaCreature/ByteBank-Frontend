import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  standalone: true
})
export class LogoComponent {
  @Input() width: string = '100px';
  @Input() height: string = '100px';
  @Input() fillColor: string = '#02273A';
}
