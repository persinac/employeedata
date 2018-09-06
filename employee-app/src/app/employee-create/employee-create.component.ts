import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals';
import { ModalEmployeeDetailComponent } from "../modal-employee-detail/modal-employee-detail.component";
import { ModalComponent } from "../modal/modal.component";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  newEmployee = {};

  // want to close the modal? include this NgbActiveModal obj
  constructor(private http: HttpClient, private router: Router,private modalService: NgbActiveModal) { }

  ngOnInit() {
  }
  saveNewEmployee() {
    this.http.post(Globals.BASE_API_URL + '/api/employees', this.newEmployee)
      .subscribe(
        res => {
          this.router.navigate(['/employees']);
        },
        (err) => {
          console.log(err);
        }
      );
    this.modalService.close();
    location.reload();
  }
}
