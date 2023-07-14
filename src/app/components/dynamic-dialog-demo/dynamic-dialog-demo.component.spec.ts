import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDialogDemoComponent } from './dynamic-dialog-demo.component';

describe('DynamicDialogDemoComponent', () => {
  let component: DynamicDialogDemoComponent;
  let fixture: ComponentFixture<DynamicDialogDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicDialogDemoComponent]
    });
    fixture = TestBed.createComponent(DynamicDialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
