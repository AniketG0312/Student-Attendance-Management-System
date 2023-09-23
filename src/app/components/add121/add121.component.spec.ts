import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add121Component } from './add121.component';

describe('Add121Component', () => {
  let component: Add121Component;
  let fixture: ComponentFixture<Add121Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Add121Component]
    });
    fixture = TestBed.createComponent(Add121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
