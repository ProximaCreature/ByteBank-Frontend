import { Component } from '@angular/core';
import {WalletFormComponent} from '../../components/wallet-form/wallet-form.component';

@Component({
  selector: 'app-wallet-creation-page',
  standalone: true,
    imports: [
        WalletFormComponent
    ],
  templateUrl: './wallet-creation-page.component.html',
  styleUrl: './wallet-creation-page.component.css'
})
export class WalletCreationPageComponent {

}
