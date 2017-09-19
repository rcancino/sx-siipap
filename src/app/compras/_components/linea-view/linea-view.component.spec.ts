import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaViewComponent } from './linea-view.component';

describe('LineaViewComponent', () => {
  let component: LineaViewComponent;
  let fixture: ComponentFixture<LineaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
