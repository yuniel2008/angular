import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProvinceService} from '../../nomenclators-province/province.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Province} from '../../nomenclators-province/province';
import {MunicipalityService} from '../municipality.service';
import {faBan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-municipality',
  templateUrl: './new-municipality.component.html',
  styleUrls: ['./new-municipality.component.css']
})
export class NewMunicipalityComponent implements OnInit {
  public faBan = faBan;
  public form: FormGroup;
  public msgError = 'null';
  public comboProvinces: Province[] = [];

  constructor(
    private service: MunicipalityService,
    private serviceProvince: ProvinceService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    this.getComboProvinces();
    this.form.patchValue({
      n_province_id: ''
    });
  }

  ngOnInit(): void {}

  crearControles(): void {
    this.form = this.formBuilder.group({
      id: [''],
      value: ['', Validators.required],
      code: ['', [Validators.required]],
      n_province_id: ['', [Validators.required]]
    });
  }

  getComboProvinces(): void {
    this.serviceProvince.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboProvinces = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  setProvince(data: string): void {
    if (data === 'null') {
      this.form.patchValue({
        n_province_id: ''
      });
    } else {
      this.form.patchValue({
        n_province_id: data
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
    const link = ['/system/nomenclators/municipality/list'];
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
