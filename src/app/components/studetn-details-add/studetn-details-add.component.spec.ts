import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetnDetailsADDComponent } from './studetn-details-add.component';

describe('StudetnDetailsADDComponent', () => {
  let component: StudetnDetailsADDComponent;
  let fixture: ComponentFixture<StudetnDetailsADDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudetnDetailsADDComponent]
    });
    fixture = TestBed.createComponent(StudetnDetailsADDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
