import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Globals} from '../globals';
import {ModalService} from "../_services";

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  employeeToDelete = {};
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
        this.employeeToDelete = data;
      });
  }

  deleteEmployee() {
    this.http.delete(Globals.BASE_API_URL + '/api/employees/' + this.selectedEmplId)
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

  closeModal() {
    this.modalService.close()
  }

}
