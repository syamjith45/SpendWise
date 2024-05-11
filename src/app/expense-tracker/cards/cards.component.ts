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
  
  constructor(private categoryService:DataserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();

    this.route.params.subscribe(params =>{
      this.id=params['id'];
      console.log('id',this.id);
      
    })

    
  }

  getColors(id:number): string {

    let color='';
    switch(id){
      case 1:color='rgb(4,202,4)';
            break;
      case 2:color='orange';
            break;
      case 3:color='red';
            break;
      case 4:color='#E91E63';
            break;
      case 5:color='#009688';
            break;
      case 6:color='#3F51B5';
          break;
      case 7:color='#795548';
          break;
        
    }
    return color;
  }

getIcon(id:number):string[]{
  let icons:string[]=[];

  switch(id){
    case 1:
      icons=[
        "fa-solid fa-apple-whole pe-1",
        "fa-solid fa-cow pe-1",
        "fa-solid fa-plant-wilt"];
        break;

    case 2:
      icons=[
        "fa-solid fa-gas-pump pe-1",
        "fa-solid fa-bus pe-1",
        "fa-solid fa-train-tram"];
        break;
    case 3:
      icons=
        [
          "fa-solid fa-burger pe-1",
          "fa-solid fa-mug-hot pe-1",
          "fa-solid fa-fish"];
          break;
    case 4:
          icons=[
            "fa-solid fa-film pe-1",
            "fa-solid fa-map-location pe-1",
            "fa-solid fa-campground"]

          break;
      
      


      
  }

  return icons
}



  goTo(id:any){
    this.router.navigate(['details',id])
  }

  getCategories():void{
    this.categoryService.getData().subscribe(data=>{
      this.cardDetails=data;
      console.log('Categories:', this.cardDetails);
    },
    error => {
      console.error('Error fetching categories:', error); // Log error if any
    }
  )
  }





}
