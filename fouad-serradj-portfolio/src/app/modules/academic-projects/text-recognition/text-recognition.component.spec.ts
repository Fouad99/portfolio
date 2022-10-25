import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRecognitionComponent } from './text-recognition.component';

describe('TextRecognitionComponent', () => {
  let component: TextRecognitionComponent;
  let fixture: ComponentFixture<TextRecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextRecognitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
