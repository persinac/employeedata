import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmployeeDetailComponent } from './modal-employee-detail.component';

describe('ModalEmployeeDetailComponent', () => {
  let component: ModalEmployeeDetailComponent;
  let fixture: ComponentFixture<ModalEmployeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEmployeeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
