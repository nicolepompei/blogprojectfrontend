import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostPanelComponent } from './blogpost-panel.component';

describe('BlogpostPanelComponent', () => {
  let component: BlogpostPanelComponent;
  let fixture: ComponentFixture<BlogpostPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpostPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
