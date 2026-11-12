import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metodo } from './metodo';

describe('Metodo', () => {
  let component: Metodo;
  let fixture: ComponentFixture<Metodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Metodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
