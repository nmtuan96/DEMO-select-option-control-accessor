import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSelectCompComponent } from './reactive-select-comp.component';

describe('ReactiveSelectCompComponent', () => {
  let component: ReactiveSelectCompComponent;
  let fixture: ComponentFixture<ReactiveSelectCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveSelectCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSelectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
