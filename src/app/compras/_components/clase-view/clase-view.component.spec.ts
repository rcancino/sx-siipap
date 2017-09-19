import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseViewComponent } from './clase-view.component';

describe('ClaseViewComponent', () => {
  let component: ClaseViewComponent;
  let fixture: ComponentFixture<ClaseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
