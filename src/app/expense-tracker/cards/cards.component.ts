import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardDetails:any
  id:any;
  grandAmount:number=0;
  
  constructor(private getapi:DataserviceService,private router:Router) { }

  ngOnInit(): void {
    this.Card();
  }

  Card(){
    this.getapi.getData().subscribe((res)=>{
      this.cardDetails=res;
      console.log(res);
      this.cardDetails.forEach((expense:any)=>{
        const totalAmount=expense.table.reduce((acc:any,current:any)=>acc+(current.amount),0)
        expense.total=totalAmount.toFixed(2);
        this.grandAmount+=totalAmount
        console.log('grand',this.grandAmount);
        
      })
    })
  }

  goTo(id:any){
    this.router.navigate(['details',id])
  }

}
