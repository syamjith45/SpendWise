import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Service/category.service';
import { DataserviceService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  Cname:any;

  allExpense:any
  totalAmount: any;
  monthAndYear!: string;

  
  CategoryNameValue: any;
  id: any;
  categoryName:any;
  catIdTotal:any;
  
  constructor(private route:ActivatedRoute,private getdata:DataserviceService,private catName:CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id=params['id']
    })
    this.getMonthAndYear();

    this.getCatName();

    this.getCatTotal();
    
  }
 

  getMonthAndYear(){
    let monthAndYear = this.getdata.getSelectMonth();
    let [year,month] = monthAndYear.split("-");
    let months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let selectedMonth = months[parseInt(month,10)-1];
    this.monthAndYear = selectedMonth +"  "+ year;
  }


  
  // getColors(id:number): string {

  //   let color='';
  //   switch(id){
  //     case 1:color='rgb(4,202,4)';
  //           break;
  //     case 2:color='orange';
  //           break;
  //     case 3:color='red';
  //           break;
  //     case 4:color='#E91E63';
  //           break;
  //     case 5:color='#009688';
  //           break;
  //     case 6:color='#3F51B5';
  //         break;
  //     case 7:color='#795548';
  //         break;
        
  //   }
  //   return color;
  // }

  // getCatNmae(id:number):string{
  //   let category='';

  //   switch(id){
  //     case 1:category='Groceries';
  //       break;
  //     case 2:category='Transportation';
  //       break;
  //     case 3:category='Food'
  //       break;
  //     case 4:category='Fun'
  //       break;
  //     case 5:category='Health Care'
  //       break;
  //     case 6:category='Utilities' 
  //       break;
  //     case 7:category='Misc'
  //       break;
      
  //   }

  //   return category
  // }

  getCatName(){

    this.catName.getCategoryName(this.id).subscribe((res)=>{
      console.log('res',res);

      this.categoryName=res;
      console.log('catName',this.categoryName)
    })
  }

  getColorCat(){
     return {
      'color': this.catName.getColor(this.id)
     } 
  }

  
  getCatTotal():void{
    this.getdata.getTotalByCatId().subscribe(data=>{
      this.catIdTotal=data;
      console.log('titletotal',this.catIdTotal);
      
    })
  }



  
  
}
