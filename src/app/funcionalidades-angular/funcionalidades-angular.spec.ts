import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionalidadesAngular } from './funcionalidades-angular';

describe('FuncionalidadesAngular', () => {
  let component: FuncionalidadesAngular;
  let fixture: ComponentFixture<FuncionalidadesAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionalidadesAngular],
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionalidadesAngular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
