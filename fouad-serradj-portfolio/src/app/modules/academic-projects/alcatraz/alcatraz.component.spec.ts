import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcatrazComponent } from './alcatraz.component';

describe('AlcatrazComponent', () => {
  let component: AlcatrazComponent;
  let fixture: ComponentFixture<AlcatrazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcatrazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcatrazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
