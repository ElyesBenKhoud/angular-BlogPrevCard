import { Component } from '@angular/core';
import { CardContentComponent } from './card-content/card-content.component';
@Component({
  selector: 'app-root',
  imports: [CardContentComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
