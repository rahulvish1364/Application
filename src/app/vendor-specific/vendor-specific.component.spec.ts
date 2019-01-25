import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSpecificComponent } from './vendor-specific.component';

describe('VendorSpecificComponent', () => {
  let component: VendorSpecificComponent;
  let fixture: ComponentFixture<VendorSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
