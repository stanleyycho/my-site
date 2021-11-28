import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyHomeComponent } from './my-home.component';

describe('MyHomeComponent', () => {
  let component: MyHomeComponent;
  let fixture: ComponentFixture<MyHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
