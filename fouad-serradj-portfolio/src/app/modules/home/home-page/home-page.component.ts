import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  scroll(element : HTMLElement){
    element.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit(): void {
    this.navigationService.updateHighlightedNavbarOption();

  }

}
