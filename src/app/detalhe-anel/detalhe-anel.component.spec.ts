import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAnelComponent } from './detalhe-anel.component';

describe('DetalheAnelComponent', () => {
  let component: DetalheAnelComponent;
  let fixture: ComponentFixture<DetalheAnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheAnelComponent]
    });
    fixture = TestBed.createComponent(DetalheAnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
