import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExemploInterpolacao } from './exemplo-interpolacao';

describe('ExemploInterpolacao', () => {
  let component: ExemploInterpolacao;
  let fixture: ComponentFixture<ExemploInterpolacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploInterpolacao],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploInterpolacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
