import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {
  constructor() { }
  @Output()
  OsSelected = new EventEmitter<string>();

  @Input()
  dataFromParent: any;
  systemSelected = "Windows";
  environment: string | undefined;

  osSelector(operatingSystem: string) {
    console.log(this.dataFromParent[0].environment)
    this.environment = this.dataFromParent[0].environment;
    this.systemSelected = operatingSystem;
    this.OsSelected.emit(operatingSystem);

    if (operatingSystem === 'Windows') {
      this.flagWindows = true;
      this.flagLinux = false;
      this.flagMac = false;
    } else if (operatingSystem === 'Mac') {
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

  ngOnInit(): void {
  }
}
