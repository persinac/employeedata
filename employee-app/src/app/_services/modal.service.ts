import {EventEmitter, Injectable, Output} from "@angular/core";

@Injectable()
export class ModalService {
  selectedEmpId = '';
  toDelete = false;

  setSelectedId(id) {
    console.log("Setting ID");
    this.selectedEmpId = id;
    console.log("ID set to: " + this.selectedEmpId);
  }

  getSelectedId() {
    return this.selectedEmpId;
  }

  setToDelete() {
    console.log("Setting To Delete");
    this.toDelete = !this.toDelete;
    console.log("toDelete set to: " + this.toDelete);
  }

  getToDelete() {
    return this.toDelete;
  }

}
