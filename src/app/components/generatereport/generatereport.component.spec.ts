import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratereportComponent } from './generatereport.component';

describe('GeneratereportComponent', () => {
  let component: GeneratereportComponent;
  let fixture: ComponentFixture<GeneratereportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratereportComponent]
    });
    fixture = TestBed.createComponent(GeneratereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
