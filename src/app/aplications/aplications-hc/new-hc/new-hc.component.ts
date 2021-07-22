import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {Municipality} from '../../../system/system-nomenclators/nomenclators-municipality/municipality';
import {MunicipalityService} from '../../../system/system-nomenclators/nomenclators-municipality/municipality.service';
import {HcService} from '../hc.service';

@Component({
  selector: 'app-new-hc',
  templateUrl: './new-hc.component.html',
  styleUrls: ['./new-hc.component.css']
})
export class NewHcComponent implements OnInit {
  public faBan = faBan;
  public form: FormGroup;
  public msgError = 'null';
  public comboMunicipality: Municipality[] = [];

  constructor(
    private service: HcService,
    private serviceMunicipality: MunicipalityService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    this.getComboMunicipality();
    this.form.patchValue({
      id_municipalities: ''
    });
  }

  ngOnInit(): void {}

  crearControles(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      id_municipalities_hc: ['', [Validators.required]],
      ci: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: [''],
      patologies: [''],
    });
  }

  getComboMunicipality(): void {
    this.serviceMunicipality.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboMunicipality = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  setMunicipality(data: string): void {
    if (data === 'null') {
      this.form.patchValue({
        id_municipalities_hc: ''
      });
    } else {
      this.form.patchValue({
        id_municipalities_hc: data
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
    const link = ['/hc/list'];
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
