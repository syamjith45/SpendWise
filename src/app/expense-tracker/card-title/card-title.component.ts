import { Component, Input, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements OnInit {
  month:string='';
  constructor(private getmonth:DataserviceService) { }

  ngOnInit(): void {

    this.month=this.getmonth.getSelectMonth();
  }

  onMonthChange(){
    this.getmonth.setSelectMonth(this.month)
  }

}
