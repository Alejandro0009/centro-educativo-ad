import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ingles } from './ingles';

describe('Ingles', () => {
  let component: Ingles;
  let fixture: ComponentFixture<Ingles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ingles],
    }).compileComponents();

    fixture = TestBed.createComponent(Ingles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
