import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContLabourComponent } from './cont-labour.component';

describe('ContLabourComponent', () => {
  let component: ContLabourComponent;
  let fixture: ComponentFixture<ContLabourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContLabourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContLabourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
