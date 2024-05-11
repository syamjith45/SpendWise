import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  Cname:any;
  id:number=0;
  allExpense:any
  totalAmount: any;
  monthAndYear!: string;
  
  constructor(private route:ActivatedRoute,private getMonth:DataserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id=params['id']
    })
    this.getMonthAndYear();
  }
 

  getMonthAndYear(){
    let monthAndYear = this.getMonth.getSelectMonth();
    let [year,month] = monthAndYear.split("-");
    let months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let selectedMonth = months[parseInt(month,10)-1];
    this.monthAndYear = selectedMonth +"  "+ year;
  }
}
