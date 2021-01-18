import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualDayComponent } from './annual-day.component';

describe('AnnualDayComponent', () => {
  let component: AnnualDayComponent;
  let fixture: ComponentFixture<AnnualDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
