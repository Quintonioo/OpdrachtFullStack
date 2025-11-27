import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boek } from '../Models/Boek';
import { Boekservice } from '../service/Boekservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boekenlijst',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './boekenlijst.html',
  styleUrl: './boekenlijst.css',
})

export class Boekenlijst {

  boekenlijst: Boek[] = [];
  viewMode: 'table' | 'gallery' = 'table';

  constructor(private boekservice: Boekservice) {
    this.boekenlijst = this.boekservice.getBoeken();
  }

  setView(mode: 'table' | 'gallery') {
    this.viewMode = mode;
  }

  trackById(_: number, boek: Boek) {
    return boek.id;
  }

}
