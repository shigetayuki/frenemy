import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimarComponent } from './disclaimar.component';

describe('DisclaimarComponent', () => {
  let component: DisclaimarComponent;
  let fixture: ComponentFixture<DisclaimarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclaimarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
