import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../nomenclators-category/category';
import {CategoryService} from '../../nomenclators-category/category.service';
import {ActivityService} from '../activity.service';
import {faBan} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {
  public faBan = faBan;
  public form: FormGroup;
  public msgError = 'null';
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

  ngOnInit(): void {}

  crearControles(): void {
    this.form = this.formBuilder.group({
      id: [''],
      value: ['', Validators.required],
      code: ['', [Validators.required]],
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
            console.log(rt.data);
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
