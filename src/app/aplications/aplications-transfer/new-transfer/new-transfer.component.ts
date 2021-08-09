import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {IsolationsCenter} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center';
import {TransferService} from '../transfer.service';
import {IsolationsCenterService} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';
import {Admitions} from '../../aplications-admitions/admitions';
import {AdmitionsService} from '../../aplications-admitions/admitions.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {
  public faBan = faBan;
  public form: FormGroup;
  public msgError = 'null';
  public comboIC: IsolationsCenter[] = [];
  public admitions: Admitions = null;
  public id;

  public loading = false;

  constructor(
    private service: TransferService,
    private serviceAd: AdmitionsService,
    private serviceIC: IsolationsCenterService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    this.form.patchValue({
      id_admitions: '',
      destinations: ''
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.idad;
    this.getByid(this.id);
    this.form.patchValue({
      id_admitions: this.id
    });
  }

  crearControles(): void {
    this.form = this.formBuilder.group({
      id: [''],
      date: ['', [Validators.required]],
      id_admitions: ['', [Validators.required]],
      source: ['', [Validators.required]],
      destinations: ['', [Validators.required]]
    });
  }

  getByid( id: string): void {
    if (!id) {
      id = 'vacio';
    }
    this.loading = false;
    this.admitions = null;

    this.serviceAd.getByid(id)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.admitions = rt.data;
            this.form.patchValue({
              source: this.admitions.isolation_center.id
            });

            this.getComboIC();

            this.loading = true;
          }
        },
        er => {
          this.msgError = er;
          this.loading = true;
        },
        () => {

          console.log('ready');
        }
      );
  }

  getComboIC(): void {
    this.serviceIC.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            let arrayCombo = [];
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < rt.data.length; i++){
             if (rt.data[i].id !== this.admitions.isolation_center.id){
               arrayCombo.push(rt.data[i]);
             }
           }

            this.comboIC = arrayCombo;
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
        destinations: ''
      });
    } else {
      this.form.patchValue({
        destinations: data
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
    const link = ['/transfer/list'];
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
