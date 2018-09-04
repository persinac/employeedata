import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Globals} from '../globals';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  //global guys
  employee = {};
  // baseAPIURL = "http://localhost:8080";
  /**
   * TODO: Why the private vars?
   * @param route
   * @param http
   */
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() { this.getEmployeeDetails(Globals.BASE_API_URL, this.route.snapshot.params['id']); }

  getEmployeeDetails(baseAPIURL, id) {
    this.http.get(baseAPIURL + '/api/employees/' + id).subscribe(
      data => {
        this.employee = data
      }
    );
  }

}
