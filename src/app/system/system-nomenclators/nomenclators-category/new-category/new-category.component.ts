import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountryService} from '../../nomenclators-country/country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  public form: FormGroup;
  public msgError = 'null';

  constructor(
    private service: CategoryService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
  }

  ngOnInit(): void {
  }

  crearControles(): void {
    this.form = this.formBuilder.group({
      id: [''],
      value: ['', Validators.required],
      code: ['', [Validators.required]]
    });
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
    const link = ['/system/nomenclators/category/list'];
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
