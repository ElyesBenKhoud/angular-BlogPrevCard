import { Component } from '@angular/core';
import { CardContentComponent } from './card-content/card-content.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
@Component({
  selector: 'app-root',
  imports: [CardContentComponent, CardFooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
