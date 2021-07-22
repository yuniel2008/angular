import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {TestService} from '../test.service';

@Component({
  selector: 'app-closed-test',
  templateUrl: './closed-test.component.html',
  styleUrls: ['./closed-test.component.css']
})
export class ClosedTestComponent implements OnInit {
  public faBan = faBan;
  public form: FormGroup;
  public obj: any;
  public msgError = 'null';
  private id: string;
  public status: boolean;

  constructor(
    private service: TestService,
    private router: Router,
    private  route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.crearControles();
    {}
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
                status_test: 2,
                result: false
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
      result_date: ['', [Validators.required]],
      status_test: ['', [Validators.required]],
      result: ['', [Validators.required]]
    });
  }

  update(): void {
    this.service.closed(this.form.value, this.id)
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
    const link = ['test/list'];
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
