import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckcompComponent } from './checkcomp.component';

describe('CheckcompComponent', () => {
  let component: CheckcompComponent;
  let fixture: ComponentFixture<CheckcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
