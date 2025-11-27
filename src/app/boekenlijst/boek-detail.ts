import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Boek } from '../Models/Boek';
import { Boekservice } from '../service/Boekservice';

@Component({
  selector: 'app-boek-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './boek-detail.html',
  styleUrl: './boekenlijst.css'
})
export class BoekDetail implements OnInit {
  boek?: Boek;

  constructor(private route: ActivatedRoute, private boekservice: Boekservice) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;
    if (id !== null) {
      this.boek = this.boekservice.getBoeken().find(b => b.id === id);
    }
  }
}
