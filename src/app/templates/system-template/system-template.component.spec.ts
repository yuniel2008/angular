import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTemplateComponent } from './system-template.component';

describe('SystemTemplateComponent', () => {
  let component: SystemTemplateComponent;
  let fixture: ComponentFixture<SystemTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
