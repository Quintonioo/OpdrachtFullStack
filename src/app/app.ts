import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Boekenlijst } from "./boekenlijst/boekenlijst";
import { BoekDetail } from './boekenlijst/boek-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Boekenlijst, BoekDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boekbeheer-app');
}
