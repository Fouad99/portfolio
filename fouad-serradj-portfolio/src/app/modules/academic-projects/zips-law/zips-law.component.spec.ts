import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipsLawComponent } from './zips-law.component';

describe('ZipsLawComponent', () => {
  let component: ZipsLawComponent;
  let fixture: ComponentFixture<ZipsLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipsLawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipsLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
