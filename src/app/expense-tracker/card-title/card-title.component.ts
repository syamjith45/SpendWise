import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent implements OnInit {
  month:string='';
  id: any;
  GrandTotal: any;
  constructor(private getdata:DataserviceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.month=this.getdata.getSelectMonth();

    this.route.params.subscribe(params=>{
        this.id=params['id']
    })
    this.getGrandTotal();
  }

  onMonthChange(){
    this.getdata.setSelectMonth(this.month)
    
  }

  getGrandTotal(){
   this.getdata.getTotalAmount().subscribe(res=>{
    this.GrandTotal=res;
    console.log('grand',this.GrandTotal);
    
   })
   
   
  }
}
