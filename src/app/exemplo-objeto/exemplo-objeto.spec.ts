import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExemploObjeto } from './exemplo-objeto';

describe('ExemploObjeto', () => {
  let component: ExemploObjeto;
  let fixture: ComponentFixture<ExemploObjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploObjeto],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploObjeto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
