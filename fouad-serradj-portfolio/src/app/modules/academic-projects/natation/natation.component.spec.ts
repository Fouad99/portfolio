import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatationComponent } from './natation.component';

describe('NatationComponent', () => {
  let component: NatationComponent;
  let fixture: ComponentFixture<NatationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
