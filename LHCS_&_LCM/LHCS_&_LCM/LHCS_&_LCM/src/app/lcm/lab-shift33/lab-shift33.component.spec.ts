import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabShift33Component } from './lab-shift33.component';

describe('LabShift33Component', () => {
  let component: LabShift33Component;
  let fixture: ComponentFixture<LabShift33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabShift33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabShift33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
