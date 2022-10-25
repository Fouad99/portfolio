import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-text-recognition',
  templateUrl: './text-recognition.component.html',
  styleUrls: ['./text-recognition.component.css']
})
export class TextRecognitionComponent implements OnInit {
  activeState: boolean[] = [false, false];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateHighlightedNavbarOption();

  }

  toggle(index: number){
    this.activeState[index] = !this.activeState[index];
  }
}
