import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntradaProductosComponent } from './lista-entrada-productos.component';

describe('ListaEntradaProductosComponent', () => {
  let component: ListaEntradaProductosComponent;
  let fixture: ComponentFixture<ListaEntradaProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEntradaProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntradaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
