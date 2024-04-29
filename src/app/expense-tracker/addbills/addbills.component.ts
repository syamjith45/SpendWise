import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbills',
  templateUrl: './addbills.component.html',
  styleUrls: ['./addbills.component.css']
})
export class AddbillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formData = {
    type: '',
    date: '',
    person: '',
    description: '',
    amount: ''
  };

  onSubmit() {
    // Handle form submission logic here
    console.log(this.formData);
    // You can perform further actions here, like sending the form data to an API
    // or processing it in any other way according to your application's requirements
  }

}
