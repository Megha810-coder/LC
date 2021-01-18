import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabShift11Component } from './lab-shift11.component';

describe('LabShift11Component', () => {
  let component: LabShift11Component;
  let fixture: ComponentFixture<LabShift11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabShift11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabShift11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
