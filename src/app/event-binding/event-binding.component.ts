import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
           <h2>Welcome {{name}}</h2>
          <button (click)="onClick()">Greet</button>`,
  styles: []
})
export class EventBindingComponent {
  public name:String = "Chavdar" + " !";

  onClick():void {
    console.log('Welcome to Codevolution!');
  }


}
