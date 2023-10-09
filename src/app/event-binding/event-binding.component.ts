import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
           <h2>Welcome {{name}}</h2>
          <button (click)="onClick()">Greet</button>
          {{greeting}}
          `,
  styles: []
})
export class EventBindingComponent implements OnInit{
  public name:String = "Chavdar" + " !";
  public greeting = "";

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onClick():void {
    console.log('Welcome to Codevolution!');
    this.greeting = 'Welcome to Codevolution.';
  }


}
