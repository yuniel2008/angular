import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Config} from '../../../config';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public form: FormGroup;
  private obj: any;
  public msgError = 'null';
  private id: string;

  constructor(
    private service: UserService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    if (!this.id) { return; }

    this.service.getByid(this.id)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.obj = rt.data;

            if (this.obj !== null) {
              this.form.patchValue({
                id: this.obj.id
              });
            }
          }
        },
        er => {
          this.msgError = er;
        },
        () => {
          console.log('ready');
        }
      );
  }

  crearControles(): void {
    this.form = this.formBuilder.group({
      id: [''],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirm_pass: ['', Validators.required]
    });
  }

  update(): void {
    this.service.changePassword(this.form.value, this.id)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.golist();
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  setRol(data: string): void {
    if (data === 'null') {
      this.form.patchValue({
        roles: ''
      });
    } else {
      this.form.patchValue({
        roles: data
      });
      console.log(this.form);
    }
  }

  // tslint:disable-next-line:variable-name
  validpassword(pass: string, confirm_pass: string): boolean {
    if (pass !== confirm_pass) {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:variable-name
  validation(formValid: boolean, pass: string, confirm_pass: string): boolean {

    if (pass !== confirm_pass) {
      return true;
    }
    return formValid;
  }

  golist(): void {
    const link = ['/system/user/list'];
    this.router.navigate(link);
  }

  /**
   * Convenience getter for easy access to form fields
   */
  // tslint:disable-next-line:typedef
  get f() { return this.form.controls; }

  onClosed(): void {
    this.msgError = 'null';
  }

}
