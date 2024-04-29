import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }

  getData(){
    return this.http.get('assets/data/details.json')
  }
}
