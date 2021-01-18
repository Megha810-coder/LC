import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabShift22Component } from './lab-shift22.component';

describe('LabShift22Component', () => {
  let component: LabShift22Component;
  let fixture: ComponentFixture<LabShift22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabShift22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabShift22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
