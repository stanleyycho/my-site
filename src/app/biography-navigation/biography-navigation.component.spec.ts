import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyNavigationComponent } from './biography-navigation.component';

describe('BiographyNavigationComponent', () => {
  let component: BiographyNavigationComponent;
  let fixture: ComponentFixture<BiographyNavigationComponent>;

  beforeEach(async(() => {
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
