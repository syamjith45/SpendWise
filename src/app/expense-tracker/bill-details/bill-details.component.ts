import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  tableData:any;
  id:number=0;
  allExpense:any;
  
  constructor(private getapi:DataserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
      console.log('id',this.id);
      
      this.billDetails();
    })
  }

  billDetails(){
    this.getapi.getData().subscribe((res)=>{
      this.allExpense=res;
      this.tableData=this.allExpense.find((expense:any)=>
        expense.id==this.id
      )
      console.log('table',this.tableData);
    })
  }

}
