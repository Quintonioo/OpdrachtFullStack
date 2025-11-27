import { Routes } from '@angular/router';
import { Boekenlijst } from './boekenlijst/boekenlijst';
import { BoekDetail } from './boekenlijst/boek-detail';

export const routes: Routes = [
	{ path: '', component: Boekenlijst },
	{ path: 'boek/:id', component: BoekDetail }
];
