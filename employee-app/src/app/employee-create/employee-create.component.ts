import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  newEmployee = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  saveNewEmployee() {
    this.http.post(Globals.BASE_API_URL + '/api/employees', this.newEmployee)
      .subscribe(
        res => {
          this.router.navigate(['/employee-detail', res]);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
