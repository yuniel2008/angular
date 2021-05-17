import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MunicipalityService} from '../../nomenclators-municipality/municipality.service';
import {ProvinceService} from '../../nomenclators-province/province.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Activity} from '../activity';
import {Category} from '../../nomenclators-category/category';
import {ActivityService} from '../activity.service';
import {CategoryService} from '../../nomenclators-category/category.service';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {
  public form: FormGroup;
  public obj: any;
  public msgError = 'null';
  private id: string;
  public status: boolean;
  public comboCategory: Category[] = [];

  constructor(
    private service: ActivityService,
    private serviceCategory: CategoryService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    this.getComboCategory();
    this.form.patchValue({
      n_category_id: ''
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
                n_category_id: this.obj.category.id
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
      n_category_id: ['', [Validators.required]]
    });
  }

  getComboCategory(): void {
    this.serviceCategory.list()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboCategory = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  setCategory(data: string): void {
    if (data === 'null') {
      this.form.patchValue({
        n_category_id: ''
      });
    } else {
      this.form.patchValue({
        n_category_id: data
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
    const link = ['/system/nomenclators/activity/list'];
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
