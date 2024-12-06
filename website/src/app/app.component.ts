import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<header> SCARLETT </header>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
