import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NehaApplicationComponent } from './neha-application.component';

describe('NehaApplicationComponent', () => {
  let component: NehaApplicationComponent;
  let fixture: ComponentFixture<NehaApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NehaApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NehaApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
