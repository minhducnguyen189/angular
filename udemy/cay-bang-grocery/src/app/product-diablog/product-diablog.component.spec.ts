import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDiablogComponent } from './product-diablog.component';

describe('ProductDiablogComponent', () => {
  let component: ProductDiablogComponent;
  let fixture: ComponentFixture<ProductDiablogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDiablogComponent]
    });
    fixture = TestBed.createComponent(ProductDiablogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
