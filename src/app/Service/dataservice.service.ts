import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService implements OnInit{
 
  public billId !: any;
  editItems:any;
  constructor(private http:HttpClient) { 
    
   }
  ngOnInit(): void {

  }
  
  private month:string="2024-02"

  setSelectMonth(month:string){
    this.month=month;

  }

  getSelectMonth(){
    return this.month;
  }


  setBillId(id: number) {
    this.billId = id;
    console.log(this.billId);

  }
  getBillId() {

   const obj={
    "billId":this.billId
   }
    
  }
  private DeleteUrl = 'http://localhost:5293/api/Bill/billDelete/';
  private apiUrl = 'http://localhost:5293/api/Bill/billById';
  baseurl='http://localhost:5293/api/Category/getCategory';
  posturl='http://localhost:5293/api/Bill/billPost';
  getData():Observable<any>{
    return this.http.get(this.baseurl)
  }

  createBill(Data: any): Observable<any> {
    return this.http.post<any>(this.posturl, Data);
  }

  getitem():Observable<any>{
    return this.http.get("http://localhost:5293/api/Items/itemsGet");
  }
  getBillById(id: number): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<any>(url);
  }
  private updateUrl = 'http://localhost:5293/api/Bill/billUpdate';

  updateBill(id:number,updatedData:any):Observable<any>{
    return this.http.put<any>(`${this.updateUrl}?id=${id}`,updatedData)
  }

  private BillUrl = 'http://localhost:5293/api/Bill/billGet';

  getBill():Observable<any>{
    return this.http.get(this.BillUrl);
  }

  deleteBill(id: number): Observable<any> {
    const url = `${this.DeleteUrl}${id}`;
    return this.http.delete(url);
  }
  

 public  formUrl = 'http://localhost:5293/api/Bill'
 getFormData(id: number): Observable<any> {
  const url = `${this.formUrl}/billId?id=${id}`;
  return this.http.get(url);
}
  // formurl='http://localhost:5293/api/Bill/billId?id=2';

  // formData(){
  //   return this.http.get(this.formurl)
  // }
}
