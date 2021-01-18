import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrerequisiteCreateComponent } from './prerequisite-create.component';

describe('PrerequisiteCreateComponent', () => {
  let component: PrerequisiteCreateComponent;
  let fixture: ComponentFixture<PrerequisiteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrerequisiteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrerequisiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
