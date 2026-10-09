import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Impact } from './impact';

describe('Impact', () => {
  let component: Impact;
  let fixture: ComponentFixture<Impact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Impact],
    }).compileComponents();

    fixture = TestBed.createComponent(Impact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
