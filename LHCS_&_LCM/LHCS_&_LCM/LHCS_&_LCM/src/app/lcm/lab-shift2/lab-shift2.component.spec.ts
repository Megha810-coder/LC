import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabShift2Component } from './lab-shift2.component';

describe('LabShift2Component', () => {
  let component: LabShift2Component;
  let fixture: ComponentFixture<LabShift2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabShift2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabShift2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
