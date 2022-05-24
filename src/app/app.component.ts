import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = 'Malik';
  items = [
    { description: 'Kahvalti', action: 'No' },
    { description: 'Fatura Ödeme', action: 'No' },
    { description: 'Spor', action: 'No' },
    { description: 'Sinema', action: 'No' }
  ];
}
