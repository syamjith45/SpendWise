import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements OnInit {
  @Input() total:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
