import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateHighlightedNavbarOption();
  }

}
