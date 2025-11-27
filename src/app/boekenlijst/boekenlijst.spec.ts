import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boekenlijst } from './boekenlijst';

describe('Boekenlijst', () => {
  let component: Boekenlijst;
  let fixture: ComponentFixture<Boekenlijst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boekenlijst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boekenlijst);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
