import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomizationComponent } from './search-customization.component';

describe('SearchCustomizationComponent', () => {
  let component: SearchCustomizationComponent;
  let fixture: ComponentFixture<SearchCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
