import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyMultiSelectAutocompleteComponent } from './agency-multi-select-autocomplete.component';

describe('AgencyMultiSelectAutocompleteComponent', () => {
  let component: AgencyMultiSelectAutocompleteComponent;
  let fixture: ComponentFixture<AgencyMultiSelectAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyMultiSelectAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyMultiSelectAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
