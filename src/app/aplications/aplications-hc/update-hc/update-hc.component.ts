import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {Municipality} from '../../../system/system-nomenclators/nomenclators-municipality/municipality';
import {HcService} from '../hc.service';
import {MunicipalityService} from '../../../system/system-nomenclators/nomenclators-municipality/municipality.service';

@Component({
  selector: 'app-update-hc',
  templateUrl: './update-hc.component.html',
  styleUrls: ['./update-hc.component.css']
})
export class UpdateHcComponent implements OnInit {

  public faBan = faBan;
  public form: FormGroup;
  public obj: any;
  public msgError = 'null';
  private id: string;
  public status: boolean;
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
                name: this.obj.name,
                id_municipalities_hc: this.obj.municipality.id,
                ci: this.obj.ci,
                address: this.obj.address,
                phone: this.obj.phone,
                patologies: this.obj.patologies,
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
