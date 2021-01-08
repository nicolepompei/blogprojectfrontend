import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostFullviewComponent } from './blogpost-fullview.component';

describe('BlogpostFullviewComponent', () => {
  let component: BlogpostFullviewComponent;
  let fixture: ComponentFixture<BlogpostFullviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpostFullviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostFullviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
