import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {Municipality} from '../../nomenclators-municipality/municipality';
import {IsolationsCenterService} from '../isolations-center.service';
import {MunicipalityService} from '../../nomenclators-municipality/municipality.service';

@Component({
  selector: 'app-update-isolace-center',
  templateUrl: './update-isolations-center.component.html',
  styleUrls: ['./update-isolations-center.component.css']
})
export class UpdateIsolationsCenterComponent implements OnInit {
  public faBan = faBan;
  public form: FormGroup;
  public obj: any;
  public msgError = 'null';
  private id: string;
  public status: boolean;
  public comboMunicipality: Municipality[] = [];

  constructor(
    private service: IsolationsCenterService,
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
                value: this.obj.value,
                code: this.obj.code,
                capacity: this.obj.capacity,
                address: this.obj.address,
                phone: this.obj.phone,
                type: this.obj.type,
                status: this.obj.status,
                id_municipalities: this.obj.municipalities.id
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
      id_municipalities: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: [''],
      type: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  getComboMunicipality(): void {
    this.serviceMunicipality.list()
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
        id_municipalities: ''
      });
    } else {
      this.form.patchValue({
        id_municipalities: data
      });
    }
  }

  setType(data: string): void {
    if (data === 'null') {
      this.form.patchValue({
        type: ''
      });
    } else {
      this.form.patchValue({
        type: data
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
    const link = ['/system/nomenclators/isolationsCenter/list'];
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
