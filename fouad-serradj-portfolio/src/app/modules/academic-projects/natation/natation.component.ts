import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-natation',
  templateUrl: './natation.component.html',
  styleUrls: ['./natation.component.css']
})
export class NatationComponent implements OnInit {
  activeState: boolean[] = [false, false, false];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateHighlightedNavbarOption();
  }

  toggle(index: number){
    this.activeState[index] = !this.activeState[index];
  }

}
