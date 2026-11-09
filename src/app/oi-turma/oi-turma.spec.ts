import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OiTurma } from './oi-turma';

describe('OiTurma', () => {
  let component: OiTurma;
  let fixture: ComponentFixture<OiTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OiTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(OiTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
