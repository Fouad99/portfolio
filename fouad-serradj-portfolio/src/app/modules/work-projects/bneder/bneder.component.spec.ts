import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnederComponent } from './bneder.component';

describe('BnederComponent', () => {
  let component: BnederComponent;
  let fixture: ComponentFixture<BnederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnederComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
