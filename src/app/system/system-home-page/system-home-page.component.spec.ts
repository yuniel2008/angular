import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemHomePageComponent } from './system-home-page.component';

describe('SystemHomePageComponent', () => {
  let component: SystemHomePageComponent;
  let fixture: ComponentFixture<SystemHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
