import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-alcatraz',
  templateUrl: './alcatraz.component.html',
  styleUrls: ['./alcatraz.component.css']
})
export class AlcatrazComponent implements OnInit {
  activeState : boolean[] = [false, false];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateHighlightedNavbarOption();
  }

  toggle(index: number){
    this.activeState[index] = !this.activeState[index];
  }

}
