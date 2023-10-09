import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
      <h2 [style.color]="'orange'">Style Binding</h2>
      <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit{
  public hasError = true;

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
