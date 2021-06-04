import { Component, OnInit } from '@angular/core';
import {Config} from '../../config';
import {SecurityService} from '../../security/security.service';
import {ActivatedRoute, Router} from '@angular/router';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recovery-passwod',
  templateUrl: './recovery-passwod.component.html',
  styleUrls: ['./recovery-passwod.component.css']
})
export class RecoveryPasswodComponent implements OnInit {
  public faLock = faLock;

  public form: FormGroup;
  public appName: string = Config.systemName();

  public msgError = 'null';
  public msgSusses = 'null';

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
  }

  crearControles(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  recovery(): void {
    this.msgError = 'null';

    this.service.recoveryPassword(this.form.value)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.msgSusses = 'En breve recibirá un mensaje.';
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }




  /**
   * Convenience getter for easy access to form fields
   */
  get f() { return this.form.controls; }

  onClosed(): void {
    this.msgError = 'null';
  }

}
