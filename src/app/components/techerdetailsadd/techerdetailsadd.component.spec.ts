import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecherdetailsaddComponent } from './techerdetailsadd.component';

describe('TecherdetailsaddComponent', () => {
  let component: TecherdetailsaddComponent;
  let fixture: ComponentFixture<TecherdetailsaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecherdetailsaddComponent]
    });
    fixture = TestBed.createComponent(TecherdetailsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
