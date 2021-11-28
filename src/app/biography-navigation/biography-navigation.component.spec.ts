import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BiographyNavigationComponent } from './biography-navigation.component';

describe('BiographyNavigationComponent', () => {
  let component: BiographyNavigationComponent;
  let fixture: ComponentFixture<BiographyNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographyNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
