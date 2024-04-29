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
  
  constructor(private route:ActivatedRoute,private getapi:DataserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id=params['id']
      this.catName();
    })

  }
  catName(){
    this.getapi.getData().subscribe((res)=>{
      this.allExpense=res;
   this.Cname=this.allExpense.find((expense:any)=>expense.id==this.id);
   this.totalAmount=this.Cname.table.reduce((acc:number,curr:any)=>acc+curr.amount,0);
   console.log('total',this.totalAmount);
   
   })
 
   
  }
}
