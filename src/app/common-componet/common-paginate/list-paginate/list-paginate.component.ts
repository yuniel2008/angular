import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'list-paginate',
  templateUrl: './list-paginate.component.html',
  styleUrls: ['./list-paginate.component.css']
})
export class ListPaginateComponent implements OnInit {
  @Input()
  start: number;
  @Input()
  length: number;
  @Input()
  total: number;
  @Input()
  router: string;
  @Output()
  notifyData: EventEmitter<{start: string, length: string}> = new EventEmitter<{start: string, length: string}>();

  showNex: boolean;
  showPrevious: boolean;
  showInit: boolean;
  showEnd: boolean;

  constructor() {}

  ngOnInit(): void {
    this.changePage();
  }

  // método para activar y desactivar los controles del paginado
  changePage(): void {
    this.showNex = false;
    this.showPrevious = false;
    this.showInit = false;
    this.showEnd = false;
    if (this.total > 1){

      if ((this.length  >= this.total) || (this.length === 0)) {

        this.showNex = false;
        this.showPrevious = false;
        this.showInit = false;
        this.showEnd = false;

      } else {
        if ((this.start + this.length) < this.total) {
          this.showNex = true;
          this.showEnd = true;
        }

        if (this.start > 0) {
          this.showPrevious = true;
          this.showInit = true;
        }

      }
    }

  }

  // método para moverme en la lista en siguiente
  pageNexList(): void {
    this.start = this.start + this.length;
    this.changePage();
    this.setEmiterData();
  }

// método para moverme en la lista en siguiente
  pagePreviousList(): void {
    this.start = this.start - this.length;
    this.changePage();
    this.setEmiterData();
  }

  // método para moverme en la lista al primer elemento
  pageInitList(): void {
    this.start = 0;
    this.changePage();
    this.setEmiterData();
  }

  // método para moverme en la lista al último elemento
  pageEndList(): void {
    this.start = this.total - this.length;
    this.changePage();
    this.setEmiterData();
  }

  setEmiterData(): void {
    const obj = {
      start: this.start.toString(),
      length: this.length.toString()
    };
    this.changePage();
    this.notifyData.emit(obj);
  }

  reload(): void{
    alert(this.total);
    const obj = {
      start: this.start.toString(),
      length: this.length.toString()
    };
    this.changePage();
    this.notifyData.emit(obj);
  }

}
