import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) {



   }


   getCategoryName(id: number) {
    return this.http.get(`http://localhost:5293/api/Category/getCatName?id=${id}`)
  }


  colours: string[] = ['','#4CAF50','#D88913','#E45F5F','#E91E63','#009688','#3F51B5','#795548']

  getColor(id:any){
    return this.colours[id]
  }
}
