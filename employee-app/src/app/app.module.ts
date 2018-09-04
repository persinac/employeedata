import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { ModalComponent } from './modal/modal.component';
import { ModalEmployeeDetailComponent } from './modal-employee-detail/modal-employee-detail.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const appRoutes: Routes = [
  {
    path: 'employees',
    component: EmployeeComponent,
    data: { title: 'Employee List' }
  },
  {
    path: 'employee-detail/:id',
    component: EmployeeDetailComponent,
    data: { title: 'Employee Details' }
  },
  {
    path: 'employee-create',
    component: EmployeeCreateComponent,
    data: { title: 'Create Employee' }
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    ModalComponent,
    ModalEmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugging only
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalEmployeeDetailComponent
  ]
})
export class AppModule { }
