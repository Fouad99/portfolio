import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-pmo',
  templateUrl: './pmo.component.html',
  styleUrls: ['./pmo.component.css']
})
export class PmoComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.updateHighlightedNavbarOption();
  }

}
