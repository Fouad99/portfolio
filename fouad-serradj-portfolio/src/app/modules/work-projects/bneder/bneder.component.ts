import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-bneder',
  templateUrl: './bneder.component.html',
  styleUrls: ['./bneder.component.css']
})
export class BnederComponent implements OnInit {
  activeState: boolean[] = [false, false];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateHighlightedNavbarOption();
  }

  toggle(index: number){
    this.activeState[index] = !this.activeState[index];
  }

}
