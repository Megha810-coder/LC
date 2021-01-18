import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourViewComponent } from './labour-view.component';

describe('LabourViewComponent', () => {
  let component: LabourViewComponent;
  let fixture: ComponentFixture<LabourViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
