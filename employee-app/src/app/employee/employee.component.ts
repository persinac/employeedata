import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(Globals.BASE_API_URL + '/api/employees').subscribe(
      data => {
        this.employees = data
      }
    )
  }

}
