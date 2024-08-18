import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSubmitOrderComponent } from './btn-submit-order.component';

describe('BtnSubmitOrderComponent', () => {
  let component: BtnSubmitOrderComponent;
  let fixture: ComponentFixture<BtnSubmitOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnSubmitOrderComponent]
    });
    fixture = TestBed.createComponent(BtnSubmitOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
