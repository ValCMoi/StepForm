import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStepFormComponent } from './child-step-form.component';

describe('ChildStepFormComponent', () => {
  let component: ChildStepFormComponent;
  let fixture: ComponentFixture<ChildStepFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildStepFormComponent]
    });
    fixture = TestBed.createComponent(ChildStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
