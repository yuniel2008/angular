import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faBan} from '@fortawesome/free-solid-svg-icons';

import {IsolationsCenter} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center';
import {AdmitionsService} from '../admitions.service';
import {IsolationsCenterService} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';

@Component({
  selector: 'app-new-admitions',
  templateUrl: './new-admitions.component.html',
  styleUrls: ['./new-admitions.component.css']
})
export class NewAdmitionsComponent implements OnInit {

  public faBan = faBan;
  public form: FormGroup;
  public msgError = 'null';
  public comboIC: IsolationsCenter[] = [];
  public id;

  constructor(
    private service: AdmitionsService,
    private serviceIC: IsolationsCenterService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    this.getComboIC();
    this.form.patchValue({
      id_isolation_center: ''
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.idhc;
    this.form.patchValue({
      id_hc: this.id
    });
  }

  crearControles(): void {
    this.form = this.formBuilder.group({
      id: [''],
      entry: ['', [Validators.required]],
      id_isolation_center: ['', [Validators.required]],
      t0r_positive: ['', [Validators.required]],
      id_hc: ['', [Validators.required]]
    });
  }

  getComboIC(): void {
    this.serviceIC.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboIC = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  setIC(data: string): void {
    if (data === 'null') {
      this.form.patchValue({
        id_isolation_center: ''
      });
    } else {
      this.form.patchValue({
        id_isolation_center: data
      });
    }
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

  golist(): void {
    const link = ['/admitions/list'];
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
