import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeCadastroComponent } from './pagina-de-cadastro.component';

describe('PaginaDeCadastroComponent', () => {
  let component: PaginaDeCadastroComponent;
  let fixture: ComponentFixture<PaginaDeCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDeCadastroComponent]
    });
    fixture = TestBed.createComponent(PaginaDeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
