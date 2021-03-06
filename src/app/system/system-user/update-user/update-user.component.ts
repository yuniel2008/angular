import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {faBan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public faBan = faBan;
  public form: FormGroup;
  public arrayRoles: [] = [];
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
    if (!this.id) { return; }

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

    this.service.getByid(this.id)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.obj = rt.data;

            if (this.obj !== null) {
              this.form.patchValue({
                id: this.obj.id,
                roles: this.obj.roles,
                fullname: this.obj.personal_informations.fullname,
                ci: this.obj.personal_informations.ci,
                gender: this.obj.personal_informations.gender,
                phone: this.obj.personal_informations.phone,
                email: this.obj.personal_informations.email
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

  update(): void {
    this.service.update(this.form.value, this.id)
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
