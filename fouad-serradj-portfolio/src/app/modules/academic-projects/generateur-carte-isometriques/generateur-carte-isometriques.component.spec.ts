import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurCarteIsometriquesComponent } from './generateur-carte-isometriques.component';

describe('GenerateurCarteIsometriquesComponent', () => {
  let component: GenerateurCarteIsometriquesComponent;
  let fixture: ComponentFixture<GenerateurCarteIsometriquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateurCarteIsometriquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateurCarteIsometriquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
