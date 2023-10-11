import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail-component',
  template: `
       <h2>Employee Detail</h2>
       <ul *ngFor="let employee of employees">
        <li>{{employee.id}} . {{employee.name}} - {{employee.age}}</li>
       </ul>
  `,
  styles: []
})
export class EmployeeDetailComponentComponent implements OnInit{
  
  public employees=[
    {"id":1, "name":"", "age":10},
  ];

  constructor(private _employeeService:EmployeeService){

  }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    
  }
}
