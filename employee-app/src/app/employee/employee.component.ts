import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals';
import { ModalComponent } from '../modal/modal.component';
import { ModalEmployeeDetailComponent } from '../modal-employee-detail/modal-employee-detail.component';
import {NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any;
  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.http.get(Globals.BASE_API_URL + '/api/employees').subscribe(
      data => {
        this.employees = data
      }
    )
  }

  open() {
    const modalRef = this.modalService.open(ModalEmployeeDetailComponent);
    modalRef.componentInstance.title = 'New Employee';
  }

}
