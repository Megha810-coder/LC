import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInCreateComponent } from './check-in-create.component';

describe('CheckInCreateComponent', () => {
  let component: CheckInCreateComponent;
  let fixture: ComponentFixture<CheckInCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
