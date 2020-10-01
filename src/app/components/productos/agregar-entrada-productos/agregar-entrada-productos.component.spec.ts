import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEntradaProductosComponent } from './agregar-entrada-productos.component';

describe('AgregarEntradaProductosComponent', () => {
  let component: AgregarEntradaProductosComponent;
  let fixture: ComponentFixture<AgregarEntradaProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarEntradaProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEntradaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
