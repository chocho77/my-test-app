import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h2>Welcome {{name}} ! </h2>
             <h2>{{2+2}}</h2>
             <h2>{{"Welcome " + name + " !"}}</h2>
             <h2>{{name.length}}</h2>
             <h2>{{name.toUpperCase()}}</h2>
             <h2>{{greetUser()}}</h2>
             <h2>{{siteUrl}}</h2>
             <input [id]="myId" type="text" value="Chavdar" />
             <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Momchilov" />
             `,
  styles: []
})
export class TestComponent implements OnInit{
  public name = "Chavdar";
  public myId = "testId";
  public siteUrl = window.location.href;
  public isDisabled = false;
  constructor(){

  }

  ngOnInit(): void {
    
  }

  greetUser(){

    return "Hello " + this.name;

  }

}
