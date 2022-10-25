import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-zips-law',
  templateUrl: './zips-law.component.html',
  styleUrls: ['./zips-law.component.css']
})
export class ZipsLawComponent implements OnInit {

  activeState: boolean[] = [false,false];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateHighlightedNavbarOption();
  }

  toggle(index: number){
    this.activeState[index] = !this.activeState[index];
  }

}
