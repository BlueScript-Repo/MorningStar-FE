import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalPackagesComponent } from './international-packages.component';

describe('InternationalPackagesComponent', () => {
  let component: InternationalPackagesComponent;
  let fixture: ComponentFixture<InternationalPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
