import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelsComponent } from './search-panels.component';

describe('SearchPanelsComponent', () => {
  let component: SearchPanelsComponent;
  let fixture: ComponentFixture<SearchPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPanelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
