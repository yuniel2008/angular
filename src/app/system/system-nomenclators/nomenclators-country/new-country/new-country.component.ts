import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.css']
})
export class NewCountryComponent implements OnInit {
  public form: FormGroup;
  public msgError = 'null';

  constructor(
    private service: CountryService,
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
    const link = ['/system/nomenclators/country/list'];
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
