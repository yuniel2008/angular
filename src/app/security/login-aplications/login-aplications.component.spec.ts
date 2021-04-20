import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAplicationsComponent } from './login-aplications.component';

describe('LoginAplicationsComponent', () => {
  let component: LoginAplicationsComponent;
  let fixture: ComponentFixture<LoginAplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
