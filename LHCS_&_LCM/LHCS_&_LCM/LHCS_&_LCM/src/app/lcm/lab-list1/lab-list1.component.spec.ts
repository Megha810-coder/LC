import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabList1Component } from './lab-list1.component';

describe('LabList1Component', () => {
  let component: LabList1Component;
  let fixture: ComponentFixture<LabList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
