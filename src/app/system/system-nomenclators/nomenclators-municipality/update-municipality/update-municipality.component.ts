import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProvinceService} from '../../nomenclators-province/province.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Province} from '../../nomenclators-province/province';
import {MunicipalityService} from '../municipality.service';
import {faBan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-municipality',
  templateUrl: './update-municipality.component.html',
  styleUrls: ['./update-municipality.component.css']
})
export class UpdateMunicipalityComponent implements OnInit {
  public faBan = faBan;
  public form: FormGroup;
  public obj: any;
  public msgError = 'null';
  private id: string;
  public status: boolean;
  public comboProvinces: Province[] = [];

  constructor(
    private service: MunicipalityService,
    private serviceCountry: ProvinceService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    this.getComboProvince();
    this.form.patchValue({
      n_country_id: ''
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

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
                id: this.obj.id,
                value: this.obj.value,
                code: this.obj.code,
                status: this.obj.status,
                n_province_id: this.obj.province.id
              });
              this.status = this.obj.status;
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
      value: ['', Validators.required],
      code: ['', [Validators.required]],
      status: ['', [Validators.required]],
      n_province_id: ['', [Validators.required]]
    });
  }

  getComboProvince(): void {
    this.serviceCountry.list()
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

  setEmiterData(obj: boolean): void {
    this.status = obj;
    this.form.patchValue({
      status: this.status
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
