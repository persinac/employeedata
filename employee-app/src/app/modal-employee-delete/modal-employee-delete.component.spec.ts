import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmployeeDeleteComponent } from './modal-employee-delete.component';

describe('ModalEmployeeDeleteComponent', () => {
  let component: ModalEmployeeDeleteComponent;
  let fixture: ComponentFixture<ModalEmployeeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEmployeeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmployeeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
