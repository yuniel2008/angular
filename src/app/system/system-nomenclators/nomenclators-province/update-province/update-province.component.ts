import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from '../../nomenclators-country/country';
import {ProvinceService} from '../province.service';
import {CountryService} from '../../nomenclators-country/country.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-province',
  templateUrl: './update-province.component.html',
  styleUrls: ['./update-province.component.css']
})
export class UpdateProvinceComponent implements OnInit {

  public form: FormGroup;
  public obj: any;
  public msgError = 'null';
  private id: string;
  public status: boolean;
  public comboCountrys: Country[] = [];

  constructor(
    private service: ProvinceService,
    private serviceCountry: CountryService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    this.getComboCountry();
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
                n_country_id: this.obj.country.id
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
      n_country_id: ['', [Validators.required]]
    });
  }

  getComboCountry(): void {
    this.serviceCountry.list()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboCountrys = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  setCountry(data: string): void {
    if (data === 'null') {
      this.form.patchValue({
        n_country_id: ''
      });
    } else {
      this.form.patchValue({
        n_country_id: data
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
    const link = ['/system/nomenclators/province/list'];
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
