import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationsTemplateComponent } from './aplications-template.component';

describe('AplicationsTemplateComponent', () => {
  let component: AplicationsTemplateComponent;
  let fixture: ComponentFixture<AplicationsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicationsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
