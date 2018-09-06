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
import { ModalEmployeeUpdateComponent } from './modal-employee-update/modal-employee-update.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import {ModalService} from "./_services";
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { ModalEmployeeDeleteComponent } from './modal-employee-delete/modal-employee-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

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
    ModalEmployeeDetailComponent,
    ModalEmployeeUpdateComponent,
    EmployeeUpdateComponent,
    EmployeeDeleteComponent,
    ModalEmployeeDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugging only
    ),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    DlDateTimePickerDateModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalEmployeeDetailComponent,
    ModalEmployeeUpdateComponent,
    ModalEmployeeDeleteComponent
  ]
})
export class AppModule { }
