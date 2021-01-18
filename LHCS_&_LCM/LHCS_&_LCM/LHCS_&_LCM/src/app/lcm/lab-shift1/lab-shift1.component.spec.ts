import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabShift1Component } from './lab-shift1.component';

describe('LabShift1Component', () => {
  let component: LabShift1Component;
  let fixture: ComponentFixture<LabShift1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabShift1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabShift1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
