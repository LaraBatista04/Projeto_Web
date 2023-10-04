import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheArgolaAnelComponent } from './detalhe-argola-anel.component';

describe('DetalheArgolaAnelComponent', () => {
  let component: DetalheArgolaAnelComponent;
  let fixture: ComponentFixture<DetalheArgolaAnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheArgolaAnelComponent]
    });
    fixture = TestBed.createComponent(DetalheArgolaAnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
