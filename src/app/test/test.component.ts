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
             <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Momchilov" />
             <h2 class="text-success">Success</h2>
             <h2 [class]="successClass">Success</h2>
             <h2 [class.text-danger]="hasError">Error</h2>
             <h2 [ngClass]="messageClasses">Codevolution</h2>
             `,
  styles: [`
        .text-success {
          color: green;
        }
        .text-danger {
          color:red;
        }
        .text-special {
          font-style: italic;
        }
  
  `]
})
export class TestComponent implements OnInit{
  public name = "Chavdar";
  public successClass = "text-success";
  public myId = "testId";
  public hasError = true;
  public isSpecial = true;
  
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public siteUrl = window.location.href;
  public isDisabled = true;
  constructor(){

  }

  ngOnInit(): void {
    
  }

  greetUser(){

    return "Hello " + this.name;

  }

}
