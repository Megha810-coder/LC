import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourCreateComponent } from './labour-create.component';

describe('LabourCreateComponent', () => {
  let component: LabourCreateComponent;
  let fixture: ComponentFixture<LabourCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
