import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataserviceService } from 'src/app/Service/dataservice.service';


@Component({
  selector: 'app-addbills',
  templateUrl: './addbills.component.html',
  styleUrls: ['./addbills.component.css']
})
export class AddbillsComponent implements OnInit {

  editItem: any;
  items:any;
  billDataArray: any[] = []; 
  billId:any[]=[];

  
  form: any = {
   
    // billId:this.billDataArray[0].billId,
    // expenseType: this.billDataArray[0].expenseType,
    // billDate: this.billDataArray[0].billDate,
    // billReceivedFrom: this.billDataArray[0].billReceivedFrom,
    // billDescription: this.billDataArray[0].billDescription,
    // billAmount: this.billDataArray[0].billAmount
    // billId:'',
    // expenseType:'',
    // billReceivedFrom:'',
    // billDescription:'',
    // billAmount:''
  };
  constructor(private billservice: DataserviceService) {}


  ngOnInit(): void {
    // You can access billId here
  
    this.getItems();
    
    
  }


  
  
 
  


  onSubmit() {
    console.log("form", this.form);

    this.billservice.createBill(this.form).subscribe(
      response => {
        console.log('Bill saved successfully:', response);
        this.form.reset();
      },
      error => {
        console.error('Error saving bill:', error);
      }
    );
  }

  getItems() {
    this.billservice.getitem().subscribe(res => {
      this.items = res;
      console.log("items", this.items);
    });
  }

  getBillValue(){
    // const billIdValue:any = localStorage.getItem("billId");
     
   this.billId.push(this.billservice.getBillId())

    // this.billservice.getFormData(billIdValue).subscribe((res)=>{
     

    //  this.billDataArray = res;
     
    //  console.log('billIdvalue',this.billDataArray);

    //  this.form.expenseType = this.billDataArray[0].expenseType;
    //  this.form.billDate = this.billDataArray[0].billDate;
    //  this.form.billReceivedFrom = this.billDataArray[0].billReceivedFrom;
    //  this.form.billDescription = this.billDataArray[0].billDescription;
    //  this.form.billAmount = this.billDataArray[0].billAmount;
     

    // })

    console.log('billIdvalue',this.billId);
    
  }

 
}
