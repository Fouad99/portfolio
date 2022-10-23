import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-generateur-carte-isometriques',
  templateUrl: './generateur-carte-isometriques.component.html',
  styleUrls: ['./generateur-carte-isometriques.component.css']
})
export class GenerateurCarteIsometriquesComponent implements OnInit {

  constructor(private navigationServce: NavigationService) { }

  ngOnInit(): void {
    this.navigationServce.updateHighlightedNavbarOption();
  }

}
