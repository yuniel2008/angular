import {Component, Input, OnInit} from '@angular/core';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Admitions} from '../admitions';
import {AdmitionsService} from '../admitions.service';
import {IsolationsCenterService} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center.service';
import {IsolationsCenter} from '../../../system/system-nomenclators/nomenclators-isolations-center/isolations-center';


@Component({
  selector: 'app-list-admitions',
  templateUrl: './list-admitions.component.html',
  styleUrls: ['./list-admitions.component.css']
})
export class ListAdmitionsComponent implements OnInit {
  public lists: Admitions[] = [];
  public msgError = 'null';
  public loading = false;
  public comboIC: IsolationsCenter[] = [];
  public faRetweet = faRetweet;

  private length = 10;
  private start = 0;
  private total = 0;

  public routerNavigate = '';
  public isNavigate = false;

  constructor(
    private service: AdmitionsService,
    private serviceIC: IsolationsCenterService,
  ) {
    this.list('', '', '', 'true');
    this.getComboIC();
  }

  ngOnInit(): void {
  }

  getComboIC(): void {
    this.serviceIC.getCombo()
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.comboIC = rt.data;
          }
        },
        er => {
          this.msgError = er;
        },
        () => console.log('ready')
      );
  }

  // método para recibir el valor del componente hijo y paginar
  setEmiterDataPagination(obj: {
                            start: string,
                            length: string
                          },
                          nohc: string,
                          name: string,
                          value: string,
                          status: string
  ): void {
    // tslint:disable-next-line:radix
    this.start = parseInt(obj.start);
    // tslint:disable-next-line:radix
    this.length = parseInt(obj.length);
    this.list(nohc, name, value, status);
  }

  // metodo para mostrar el paginado
  showPaginate(): boolean {
    if (this.length >= this.total){
      return false;
    } else {
      return true;
    }
  }

  // tslint:disable-next-line:typedef
  list( nohc: string,
        name: string,
        value: string,
        status: string) {

    this.loading = false;
    this.lists = [];
    this.total = 0;

    this.service.list(nohc, name, value, status, this.start, this.length)
      .subscribe(
        rt => {
          if (rt.error) {
            this.msgError = rt.error;
          } else {
            this.lists = rt.data;
            this.total = rt.total;
          }
          this.loading = true;
        },
        er => {
          this.msgError = er;
          this.loading = true;
        },
        () => console.log('ready')
      );
  }

  onClosed(): void {
    this.msgError = 'null';
  }

}
