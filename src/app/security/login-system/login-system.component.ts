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


  constructor(
    private service: SecurityService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
  }

  ngOnInit(): void {
  }

  crearControles(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.msgError = 'null';
    localStorage.setItem(Config.token(), '');
    localStorage.setItem(Config.userLogin(), btoa(''));
    localStorage.setItem(Config.rol(), btoa(''));
    localStorage.setItem(Config.isLogin(), btoa('false'));
    this.service.login(this.form.value)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            localStorage.setItem(Config.token(), rt.token);
            localStorage.setItem(Config.userLogin(), btoa(rt.username));
            localStorage.setItem(Config.isLogin(), btoa('true'));
            this.service.getRol(rt.username)
              .subscribe(
                rt1 => {
                  if (rt.error) {
                    this.msgError = rt.error;
                  } else {
                    localStorage.setItem(Config.rol(), btoa(rt1.roles));
                    this.golist();
                  }
                });
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
    const link = ['/system'];
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
