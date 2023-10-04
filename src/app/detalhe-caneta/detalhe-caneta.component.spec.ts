import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCanetaComponent } from './detalhe-caneta.component';

describe('DetalheCanetaComponent', () => {
  let component: DetalheCanetaComponent;
  let fixture: ComponentFixture<DetalheCanetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheCanetaComponent]
    });
    fixture = TestBed.createComponent(DetalheCanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
