import {Component, HostListener, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Globals} from '../globals';
import { ModalComponent } from '../modal/modal.component';
import { ModalEmployeeDetailComponent } from '../modal-employee-detail/modal-employee-detail.component';
import {NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {ModalEmployeeUpdateComponent} from "../modal-employee-update/modal-employee-update.component";
import {ModalService} from "../_services";
import {ModalEmployeeDeleteComponent} from "../modal-employee-delete/modal-employee-delete.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any;
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private modalSrvc: ModalService
  ) { }

  ngOnInit() {
    this.http.get(Globals.BASE_API_URL + '/api/employees').subscribe(
      data => {
        this.employees = data
      }
    )
  }

  open() {
    const modalRef = this.modalService.open(ModalEmployeeDetailComponent, {size:'lg'});
    modalRef.componentInstance.title = 'New Employee';
  }

  openUpdateEmployee(id) {
    const modalRef = this.modalService.open(ModalEmployeeUpdateComponent, {size:'lg'});
    this.modalSrvc.setSelectedId(id);
  }

  deleteSelectedEmployee(id) {
    const modalRef = this.modalService.open(ModalEmployeeDeleteComponent);
    this.modalSrvc.setSelectedId(id);
    this.modalSrvc.setToDelete();
  }

}
