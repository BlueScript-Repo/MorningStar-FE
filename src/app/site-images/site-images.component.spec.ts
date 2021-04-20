import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteImagesComponent } from './site-images.component';

describe('SiteImagesComponent', () => {
  let component: SiteImagesComponent;
  let fixture: ComponentFixture<SiteImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
