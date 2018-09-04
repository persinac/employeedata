import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmployeeUpdateComponent } from './modal-employee-update.component';

describe('ModalEmployeeUpdateComponent', () => {
  let component: ModalEmployeeUpdateComponent;
  let fixture: ComponentFixture<ModalEmployeeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEmployeeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmployeeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
