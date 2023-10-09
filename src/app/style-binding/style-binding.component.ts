import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
      <h2 [style.color]="'orange'">Style Binding</h2>
      <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 1</h2>
      <h2 [style.color]="highlightColor">Style Binding 2</h2>
      <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit{
  public hasError = true;
  public highlightColor = "blue";
  public titleStyles = {
    color:"green",
    fontStyle:"italic"
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
