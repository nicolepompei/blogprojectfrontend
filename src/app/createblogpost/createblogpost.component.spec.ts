import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateblogpostComponent } from './createblogpost.component';

describe('CreateblogpostComponent', () => {
  let component: CreateblogpostComponent;
  let fixture: ComponentFixture<CreateblogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateblogpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateblogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
