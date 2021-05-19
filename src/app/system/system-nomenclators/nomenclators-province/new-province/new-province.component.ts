import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountryService} from '../../nomenclators-country/country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProvinceService} from '../province.service';
import {Country} from '../../nomenclators-country/country';
import {faBan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-province',
  templateUrl: './new-province.component.html',
  styleUrls: ['./new-province.component.css']
})
export class NewProvinceComponent implements OnInit {
  public faBan = faBan;
  public form: FormGroup;
  public msgError = 'null';
  public comboCountry: Country[] = [];

  constructor(
    private service: ProvinceService,
    private serviceCountry: CountryService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    this.getComboContry();
    this.form.patchValue({
      n_country_id: ''
    });
  }

  ngOnInit(): void {}

  crearControles(): void {
    this.form = this.formBuilder.group({
      id: [''],
      value: ['', Validators.required],
      code: ['', [Validators.required]],
      n_country_id: ['', [Validators.required]]
    });
  }

  getComboContry(): void {console.log('paso');
    this.serviceCountry.list()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboCountry = rt.data;
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
