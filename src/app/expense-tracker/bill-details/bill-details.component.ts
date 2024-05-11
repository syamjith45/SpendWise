import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataserviceService } from 'src/app/Service/dataservice.service';


@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})


export class BillDetailsComponent implements OnInit {
  tableData: any;
  id:any
  formData:any;
   editItem:any;
   billId:any;
   Id:any

   
  constructor(private route: ActivatedRoute, private billdata: DataserviceService) {
    
   }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id', this.id)
      
    });
  this.getBill();
  this.getBillData();
 
  }

  getBill(){
    this.billdata.getBillById(this.id).subscribe(res=>{
      this.tableData=res;

      console.log('table',this.tableData)
    })
  }

  getBillData(){
    this.billdata.getBill().subscribe(res=>{
    this.formData=res;

    console.log('formData',this.formData);
    

    })
  }

//   updateBill(billId:any){
//     this.billdata.updateBill(billId,this.formData).subscribe(res=>{
//       console.log('Bill updated successfully:', res);
//     })

//     this.editItem = this.formData.find((a:any)=>{
//       return a.billId == billId;
//     })
//      console.log('edit',this.editItem);

   
    
// }

EditButton(Id:number){
   this.billdata.setBillId(Id);
  
  // localStorage.setItem("billId", JSON.stringify(Id));
this.billdata.setBillId(Id);
}
DelButton(Id:any){
  this.billdata.deleteBill(Id).subscribe(response => {
    console.log('Bill deleted successfully');
    // Handle success, if needed
  },
  error => {
    console.error('Error deleting bill:', error);
    // Handle error, if needed
  }
);
}




}
