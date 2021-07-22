import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {IsolationsCenter} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center';
import {AdmitionsService} from '../../aplications-admitions/admitions.service';
import {IsolationsCenterService} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';
import {Laboratory} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory';
import {TestService} from '../test.service';
import {LaboratoryService} from '../../../system/system-nomenclators/nomenclators-laboratory/laboratory.service';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {

  public faBan = faBan;
  public form: FormGroup;
  public msgError = 'null';
  public comboLab: Laboratory[] = [];
  public id;

  constructor(
    private service: TestService,
    private serviceLab: LaboratoryService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    this.getComboLab();
    this.form.patchValue({
      id_laboratories: ''
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
      date_samples: ['', [Validators.required]],
      id_laboratories: ['', [Validators.required]],
      id_hc: ['', [Validators.required]]
    });
  }

  getComboLab(): void {
    this.serviceLab.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboLab = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  setLab(data: string): void {
    if (data === 'null') {
      this.form.patchValue({
        id_laboratories: ''
      });
    } else {
      this.form.patchValue({
        id_laboratories: data
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
    const link = ['/test/list'];
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
