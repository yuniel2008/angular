import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Config} from '../../config';
import {SecurityService} from '../security.service';
import {ActivatedRoute, Router} from '@angular/router';
import {faLock} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login-system',
  templateUrl: './login-system.component.html',
  styleUrls: ['./login-system.component.css']
})
export class LoginSystemComponent implements OnInit {
  public faLock = faLock;

  public form: FormGroup;
  public appName: string = Config.systemName();

  public msgError = 'null';

  public copyrigth = '';


  constructor(
    private service: SecurityService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.copyrigth = Config.copyrigth();
    this.crearControles();
  }

  ngOnInit(): void {
    this.service.logout();
  }

  crearControles(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.msgError = 'null';

    this.service.login(this.form.value)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            localStorage.setItem(Config.token(), rt.token);
            localStorage.setItem(Config.userLogin(), btoa(rt.username));
            localStorage.setItem(Config.isLogin(), btoa('true'));
            localStorage.setItem(Config.rol(), btoa(rt.rol));
            this.golist();
          }
        },
        er => {
          this.msgError = er;
          console.log(er);
        },
        () => console.log('ready')
      );
  }

  golist(): void {
    const link = [''];
    this.router.navigate(link);
  }



  /**
   * Convenience getter for easy access to form fields
   */
  get f() { return this.form.controls; }

  onClosed(): void {
    this.msgError = 'null';
  }

}
