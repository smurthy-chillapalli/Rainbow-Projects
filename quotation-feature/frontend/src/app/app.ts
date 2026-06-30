import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Custom Classes imports
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rainbowLifts');
}
