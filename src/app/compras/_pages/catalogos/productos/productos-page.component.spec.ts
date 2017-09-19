import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPageComponent } from './productos-page.component';

describe('ProductosPageComponent', () => {
  let component: ProductosPageComponent;
  let fixture: ComponentFixture<ProductosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
