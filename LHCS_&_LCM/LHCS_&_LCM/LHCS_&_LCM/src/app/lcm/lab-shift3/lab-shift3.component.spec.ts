import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabShift3Component } from './lab-shift3.component';

describe('LabShift3Component', () => {
  let component: LabShift3Component;
  let fixture: ComponentFixture<LabShift3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabShift3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabShift3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
