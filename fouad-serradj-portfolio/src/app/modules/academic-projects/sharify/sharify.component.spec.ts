import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharifyComponent } from './sharify.component';

describe('SharifyComponent', () => {
  let component: SharifyComponent;
  let fixture: ComponentFixture<SharifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
