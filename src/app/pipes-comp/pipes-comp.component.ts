import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-comp',
  template: `
       <h2>{{name}}</h2>
       <h2>{{name | lowercase}}</h2>
       <h2>{{name | uppercase}}</h2>
       <h2>{{message | titlecase}}</h2>
       <h2>{{name | slice:3:5 }}</h2>
       <h2>{{person | json}}</h2>
       
       <h2>{{5.678 | number:'1.2-3'}}</h2>
       <h2>{{5.678 | number:'3.4-5'}}</h2>
       <h2>{{5.678 | number:'3.1-2'}}</h2>
  
  
  `,
  styles: []
})
export class PipesCompComponent implements OnInit{

  public name = "Codevolution";
  public message = "Welcome to codevolution";
  public person = {
    "firstName":"John",
    "lastName":"Doe"
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
