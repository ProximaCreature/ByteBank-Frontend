import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  standalone: true,
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css'],
})
export class UserIconComponent {
  @Input() width: string = '40px';
  @Input() height: string = '40px';
  @Input() fillColor: string = '#02273A';
}
