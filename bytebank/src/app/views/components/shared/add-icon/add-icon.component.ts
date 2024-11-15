import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-icon',
  standalone: true,
  imports: [],
  templateUrl: './add-icon.component.html',
  styleUrl: './add-icon.component.css'
})
export class AddIconComponent {
  @Input() width: string = '40px';
  @Input() height: string = '40px';
  @Input() fillColor: string = '#02273A';
}
