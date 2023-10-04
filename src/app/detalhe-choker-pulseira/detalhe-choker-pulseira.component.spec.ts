import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheChokerPulseiraComponent } from './detalhe-choker-pulseira.component';

describe('DetalheChokerPulseiraComponent', () => {
  let component: DetalheChokerPulseiraComponent;
  let fixture: ComponentFixture<DetalheChokerPulseiraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheChokerPulseiraComponent]
    });
    fixture = TestBed.createComponent(DetalheChokerPulseiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
