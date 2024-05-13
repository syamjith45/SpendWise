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
  
  private selectedMonth: string = '2024-05';

  setSelectMonth(month:string){
    this.selectedMonth=month;

  }

  getSelectMonth(){
    return this.selectedMonth;
  }

  getMonth(){
    let [year,month] = this.selectedMonth.split("-");
    return parseInt(month);
  }
  getYear(){
    let [year,month] = this.selectedMonth.split("-");
    return parseInt(year);
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
  DeleteUrl = 'http://localhost:5293/api/Bill/billDelete/';
  apiUrl = 'http://localhost:5293/api/Bill/billById';
  baseurl='http://localhost:5293/api/Category/getCategory';
  posturl='http://localhost:5293/api/Bill/billPost';
  getData():Observable<any>{
    return this.http.get(this.baseurl)
  }

  createBill(Data: any): Observable<any> {
    return this.http.post<any>(this.posturl, Data);
  }

  getitem(){
    return this.http.get("http://localhost:5293/api/Items/itemsGet");
  }
  getBillById(id: number):Observable<any>{
    const month = this.getMonth();
    const year = this.getYear();
    return this.http.get<any>(`${this.apiUrl}/?id=${id}&month=${month}&year=${year}`);
  }
  updateUrl = 'http://localhost:5293/api/Bill/billUpdate';

  updateBill(id:number,updatedData:any){
    return this.http.put<any>(`${this.updateUrl}?id=${id}`,updatedData)
  }

  private BillUrl = 'http://localhost:5293/api/Bill/billGet';

  getBill():Observable<any>{
    return this.http.get(this.BillUrl);

  }

  deleteBill(id: number) {
    const url = `${this.DeleteUrl}${id}`;
    return this.http.delete(url);
  }
  

 public  formUrl = 'http://localhost:5293/api/Bill'
 getFormData(id: number): Observable<any> {
  const url = `${this.formUrl}/billId/${id}`;
  return this.http.get(url);
}
  // formurl='http://localhost:5293/api/Bill/billId?id=2';

  // formData(){
  //   return this.http.get(this.formurl)
  // }

  public catTotalUrl = 'http://localhost:5293/api/Bill'

  getTotalByCatId(){
    const month = this.getMonth()
    const year = this.getYear()
    const url = `${this.catTotalUrl}/getTotalbyCatId?month=${month}&year=${year}`;

    return this.http.get(url)
  }

  getTotalAmount(){
    const month = this.getMonth()
    const year = this.getYear()
    return this.http.get(`http://localhost:5293/api/Bill/getTotalAmount?month=${month}&year=${year}`)
  }
}
