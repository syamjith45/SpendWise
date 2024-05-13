import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  formId:any;
  items: any;
  billDataArray: any[] = [];

  editData:any;

  

  form:any={
  
     billId:'',
     expenseType:'',
     billNo:'',
     billReceivedFrom:'',
     billDescription:'',
     billAmount:''
 }
  todayWithPipe: any;
  month!: number;
  year!: number;
  
   
  constructor(private route: ActivatedRoute, private billdata: DataserviceService) {

    
    
   }
  



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id', this.id)
      
    });
    this.getBill();
    this.getBillData();
    this.getItems();
    console.log('newform',this.form);

  }



  getBill(){
    this.billdata.getBillById(this.id).subscribe(res=>{
      this.tableData=res;

      console.log('tableIs',this.tableData)
    })
  }

  getBillData(){
    this.billdata.getBill().subscribe(res=>{
    this.formData=res;

    console.log('formData',this.formData);
    

    })
  }
  



EditButton(Id:any){
  
  // this.editData = data;
  // localStorage.setItem("billId", JSON.stringify(Id));
console.log('editbutton',Id);
  this.formId=Id
this.billdata.setBillId(Id);

this.getBillValue(this.formId);
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
getItems() {
  this.billdata.getitem().subscribe(res => {
    this.items = res;
    console.log("itemsTableResponse", res);
  });
  console.log("itemsTable", this.items);
}

valueChangeType(valueType:any){
  this.form.expenseType=valueType
}
valueChangeDate(valueDate:any){
this.form.billDate=valueDate
}
valueChangeRecieved(valueRecieved:any){
  this.form.billReceivedFrom=valueRecieved
}
valueChangeDescription(valueDescription:any){
  this.form.billDescription=valueDescription
}
valueChangeAmount(valueAmount:any){
  this.form.billAmount=valueAmount
}

valueChangeBillno(valueBillno:any){
  this.form.billNo=valueBillno
}



onSubmit() {
  console.log("form", this.form);

  this.billdata.updateBill(this.formId,this.form).subscribe(
    response => {
      console.log('Bill saved successfully:', response);
    },
    error => {
      console.error('Error saving bill:', error);
    }
  );

    // window.location.reload()
  
}

pipe = new DatePipe('en-US');

DateFormat(value: any) {
  //-------date formating----------------------
  this.todayWithPipe = this.pipe.transform(value);
  //this.pipe .transform(value, 'yyyyMMdd')
  return this.todayWithPipe

}

getBillValue(Id:any){

  this.billdata.getFormData(Id).subscribe((res)=>{
   

   this.billDataArray = res;
   
   console.log('billIdvalue',this.billDataArray);
   this.form.billId=this.billDataArray[0].billId;
   this.form.expenseType = this.billDataArray[0].expenseType;
   this.form.billNo=this.billDataArray[0].billNo;
   this.form.billDate = this.billDataArray[0].billDate;
   this.form.billReceivedFrom = this.billDataArray[0].billReceivedFrom;
   this.form.billDescription = this.billDataArray[0].billDescription;
   this.form.billAmount = this.billDataArray[0].billAmount;
   
   console.log('formvalue',this.form);
   
  })

  
  
}



}



function DateFormat(value: any, any: any) {
  throw new Error('Function not implemented.');
}



