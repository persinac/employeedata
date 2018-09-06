import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Globals} from '../globals';
import {ModalService} from "../_services";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeToEdit = {};
  selectedEmplId = 'A';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbActiveModal,
    private modalSrvc: ModalService) { }

  ngOnInit() {
    this.selectedEmplId = this.modalSrvc.getSelectedId();
    this.getEmployee(Globals.BASE_API_URL, this.selectedEmplId);
  }

  getEmployee(baseAPIURL, id) {
    this.http.get(baseAPIURL + '/api/employees/' + id).subscribe(
      data => {
      this.employeeToEdit = data;
    });
  }

  updateEmployee(id, data) {
    this.http.put(Globals.BASE_API_URL + '/api/employees/' + id, data)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/employees', id]);
        }, (err) => {
          console.log(err);
        }
      );
    this.modalService.close();
    location.reload();
  }
}
