import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentadminComponent } from './add-studentadmin.component';

describe('AddStudentadminComponent', () => {
  let component: AddStudentadminComponent;
  let fixture: ComponentFixture<AddStudentadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStudentadminComponent]
    });
    fixture = TestBed.createComponent(AddStudentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
