import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePandoraComponent } from './detalhe-pandora.component';

describe('DetalhePandoraComponent', () => {
  let component: DetalhePandoraComponent;
  let fixture: ComponentFixture<DetalhePandoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhePandoraComponent]
    });
    fixture = TestBed.createComponent(DetalhePandoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
