import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {faBan} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  public faBan = faBan;
  public form: FormGroup;
  public arrayRoles: [] = [];
  public msgError = 'null';

  constructor(
    private service: UserService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
  }

  ngOnInit(): void {
    this.service.listRoles()
      .subscribe(
        rtRol => {
          if (rtRol.error){
            this.msgError = rtRol.error;
          } else {
            this.arrayRoles = rtRol.data;
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
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirm_pass: ['', Validators.required],
      roles: ['', Validators.required],
      fullname: ['', Validators.required],
      ci: ['', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.pattern('^\\d+$')
      ])],
      gender: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  new(): void {
    this.service.new(this.form.value)
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
    console.log(formValid);
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
