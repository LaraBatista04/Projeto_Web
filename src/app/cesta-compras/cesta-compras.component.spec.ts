import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaComprasComponent } from './cesta-compras.component';

describe('CestaComprasComponent', () => {
  let component: CestaComprasComponent;
  let fixture: ComponentFixture<CestaComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CestaComprasComponent]
    });
    fixture = TestBed.createComponent(CestaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
