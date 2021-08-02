import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'common-switch-rounded',
  templateUrl: './common-switch-rounded.component.html',
  styleUrls: ['./common-switch-rounded.component.css']
})
export class CommonSwitchRoundedComponent implements OnInit {
  @Input()
  id: string;

  @Input()
  status: boolean;

  @Output()
  notifyData: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {  }

  ngOnInit(): void {
  }

  change(): void  {
    if (this.status === true){
      this.status = false;
    } else {
      this.status = true;
    }
    this.setEmiterData();
  }

  setEmiterData(): void {
    this.notifyData.emit(this.status);
  }

}
