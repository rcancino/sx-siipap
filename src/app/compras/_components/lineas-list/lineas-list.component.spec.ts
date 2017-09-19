import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasListComponent } from './lineas-list.component';

describe('LineasListComponent', () => {
  let component: LineasListComponent;
  let fixture: ComponentFixture<LineasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
