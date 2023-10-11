import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { PipesCompComponent } from './pipes-comp/pipes-comp.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponentComponent } from './employee-detail-component/employee-detail-component.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { EmployeeService } from './employee.service';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StyleBindingComponent,
    EventBindingComponent,
    StructDirectivesComponent,
    PipesCompComponent,
    EmployeeListComponent,
    EmployeeDetailComponentComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
