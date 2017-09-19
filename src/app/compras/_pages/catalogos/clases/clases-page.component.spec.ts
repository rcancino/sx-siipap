import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesPageComponent } from './clases-page.component';

describe('ClasesPageComponent', () => {
  let component: ClasesPageComponent;
  let fixture: ComponentFixture<ClasesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
