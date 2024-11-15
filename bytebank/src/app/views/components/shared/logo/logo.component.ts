import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input() width: string = '40px';
  @Input() height: string = '40px';
  @Input() fillColor: string = '#02273A';
}
