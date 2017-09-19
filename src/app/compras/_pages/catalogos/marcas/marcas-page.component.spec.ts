import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasPageComponent } from './marcas-page.component';

describe('MarcasPageComponent', () => {
  let component: MarcasPageComponent;
  let fixture: ComponentFixture<MarcasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
