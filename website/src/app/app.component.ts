import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<header> SCARLETT JAY CLARK <br>
                      (she/her)
             </header>
             <button> Programmer </button> <br>
             <button> Mathematician </button> <br>
             <button> Tabletop Gamer </button> <br>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
