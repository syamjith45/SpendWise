import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';


import { DataserviceService } from 'src/app/Service/dataservice.service';


@Component({
  selector: 'app-addbills',
  templateUrl: './addbills.component.html',
  styleUrls: ['./addbills.component.css']
})
export class AddbillsComponent implements OnInit,OnChanges {

  @Input() formData:any=[];

  editItem: any;
  items:any;
  // billid:any[]=[];

  
 
  constructor(private billservice: DataserviceService) {}

  form: any = {
    billId: null,
    expenseType: null,
    billDate: null,
    billNo: this.formData.billNo,
    billReceivedFrom: null,
    billDescription: null,
    billAmount: null,
  };
  
  ngOnChanges(changes: SimpleChanges): void {


    
    if (this.formData) {
      // Your existing logic here
      this.editItem = this.formData;
      console.log('editItem', this.editItem);
      this.updateForm();
    }
  }
  


  ngOnInit(): void {
    // You can access billId here
  
    this.getItems();
    
    // this.getBillValue();
    console.log('dataform',this.formData);

    console.log('Received formData:', this.formData);
  // Make sure formData is received properly

  // Assign formData to form object
  this.form = { ...this.formData };
  console.log('Assigned form:', this.form);
  // Check if form object is populated correc
    
  }
  updateForm() {
    this.form = {
      billId: this.formData.billId,
      expenseType: this.formData.expenseType,
      billDate: this.formData.billDate,
      billNo: this.formData.billNo,
      billReceivedFrom: this.formData.billReceivedFrom,
      billDescription: this.formData.billDescription,
      billAmount: this.formData.billAmount,
    };

    console.log('form', this.form);

  }

  onSubmit() {
    console.log("form", this.form);

    this.billservice.createBill(this.form).subscribe(
      response => {
        console.log('Bill saved successfully:', response);
      },
      error => {
        console.error('Error saving bill:', error);
      }
    );

    // window.location.reload()
  }

  getItems() {
    this.billservice.getitem().subscribe(res => {
      this.items = res;
      console.log("items", this.items);
    });
  }

  // getBillValue(){
  //   // const billIdValue:any = localStorage.getItem("billId");
  //  try{
  //   this.billid.push(this.billservice.getBillId())

  //   console.log('billIdvalue',this.billid);
  //  }  
  //  catch(error){
  //   console.log(error);
  //  }

    // this.billservice.getFormData(billIdValue).subscribe((res)=>{
     

    //  this.billDataArray = res;
     
    //  console.log('billIdvalue',this.billDataArray);

    //  this.form.expenseType = this.billDataArray[0].expenseType;
    //  this.form.billDate = this.billDataArray[0].billDate;
    //  this.form.billReceivedFrom = this.billDataArray[0].billReceivedFrom;
    //  this.form.billDescription = this.billDataArray[0].billDescription;
    //  this.form.billAmount = this.billDataArray[0].billAmount;
     

    // })

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
      this.form.billno=valueBillno
    }
    
  }

 

