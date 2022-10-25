import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-sharify',
  templateUrl: './sharify.component.html',
  styleUrls: ['./sharify.component.css']
})
export class SharifyComponent implements OnInit {
  activeState: boolean[] = [false, false];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateHighlightedNavbarOption();
  }

  toggle(index: number){
    this.activeState[index] = !this.activeState[index];
  }

}
