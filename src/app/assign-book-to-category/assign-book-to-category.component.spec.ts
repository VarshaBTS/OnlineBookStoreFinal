import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBookToCategoryComponent } from './assign-book-to-category.component';

describe('AssignBookToCategoryComponent', () => {
  let component: AssignBookToCategoryComponent;
  let fixture: ComponentFixture<AssignBookToCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBookToCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBookToCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
