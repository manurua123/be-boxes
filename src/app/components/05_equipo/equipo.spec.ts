import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Equipo } from './equipo';

describe('Equipo', () => {
  let component: Equipo;
  let fixture: ComponentFixture<Equipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Equipo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Equipo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
