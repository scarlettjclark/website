import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodingComponent } from './coding/coding.component.js';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CodingComponent, NgIf],
  template: `<header> SCARLETT JAY CLARK <br>
                      (she/her)
             </header>
             <button (click)="toggleCoding()"> <h1> Coding </h1> <app-coding *ngIf="!codingHidden;" /> </button> <br>
             <button> <h1> Wargames </h1> </button> <br>
             <button> <h1> Cardgames </h1> </button> <br>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Scarlett's Website";
  codingHidden: boolean = true;

  toggleCoding() {
    this.codingHidden = !this.codingHidden;
  }
}
