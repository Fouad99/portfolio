import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  activeState: boolean[] = [false, false, false, false];

  constructor() { }

  ngOnInit(): void {
  }

  toggle(index: number){
    this.activeState[index] = !this.activeState[index];
  }

}
