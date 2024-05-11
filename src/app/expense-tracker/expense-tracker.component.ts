import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../Service/dataservice.service';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {


  categories: any[] = [];
  constructor(private CategoryService:DataserviceService) { }

  ngOnInit(): void {

    this.getCategories();
    
  }

  getCategories():void{
    this.CategoryService.getData().subscribe(data=>{
      this.categories=data;
      console.log('Categories:', this.categories);
    },
    error => {
      console.error('Error fetching categories:', error); // Log error if any
    }
  )
  }
}
