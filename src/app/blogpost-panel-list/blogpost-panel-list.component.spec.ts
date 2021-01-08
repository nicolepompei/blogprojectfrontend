import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostPanelListComponent } from './blogpost-panel-list.component';

describe('BlogpostPanelListComponent', () => {
  let component: BlogpostPanelListComponent;
  let fixture: ComponentFixture<BlogpostPanelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpostPanelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostPanelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
