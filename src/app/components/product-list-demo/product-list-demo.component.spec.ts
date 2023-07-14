import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListDemoComponent } from './product-list-demo.component';

describe('ProductListDemoComponent', () => {
  let component: ProductListDemoComponent;
  let fixture: ComponentFixture<ProductListDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListDemoComponent]
    });
    fixture = TestBed.createComponent(ProductListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
