import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
           <h2>Welcome {{name}}</h2>
          <button (click)="onClick($event)">Greet</button>
          {{greeting}}
          <button (click)="greeting='Welcome Chavdar!'">Greet</button>
          <input #myInput type="text"/>
          <button (click)="logMessage(myInput)">Log</button>

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

  onClick(event: any):void {
    //console.log(event);
    this.greeting = event.type;
  }

  logMessage(value: any):void{
    console.log(value);

  }


}
