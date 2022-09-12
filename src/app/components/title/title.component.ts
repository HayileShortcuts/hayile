import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  constructor() {}
  @Output()
  OsSelected = new EventEmitter<string>();

  @Input()
  dataFromParent: any;
  systemSelected = 'Windows';
  environment: string | undefined;

  osSelector(operativeSystem: string) {
    this.environment = this.dataFromParent[0].environment;
    this.systemSelected = operativeSystem;
    this.OsSelected.emit(operativeSystem);

    if (operativeSystem === 'Windows') {
      this.flagWindows = true;
      this.flagLinux = false;
      this.flagMac = false;
    } else if (operativeSystem === 'Mac') {
      this.flagWindows = false;
      this.flagLinux = false;
      this.flagMac = true;
    } else {
      this.flagWindows = false;
      this.flagLinux = true;
      this.flagMac = false;
    }
  }

  flagWindows: boolean = true;
  flagLinux: boolean = false;
  flagMac: boolean = false;

  ngOnInit(): void {}
}
