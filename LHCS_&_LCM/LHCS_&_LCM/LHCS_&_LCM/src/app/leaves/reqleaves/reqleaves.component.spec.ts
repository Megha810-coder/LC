import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqleavesComponent } from './reqleaves.component';

describe('ReqleavesComponent', () => {
  let component: ReqleavesComponent;
  let fixture: ComponentFixture<ReqleavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqleavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
