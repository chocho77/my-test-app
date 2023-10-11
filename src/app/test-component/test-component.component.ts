import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-test-component',
    template: `<p>App Test Component Works</p>`,
    styles:[]
})

export class TestComponentComponent implements OnInit{

    constructor(){
        
    }
    
    ngOnInit(): void {
        
    }

}