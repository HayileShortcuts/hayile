import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {
  @Output()
  OsSelected = new EventEmitter<string>();

  @Input()
  currentlyOs: any;
  systemSelected = "Windows";

  osSelector(operatingSystem: string) {
    this.systemSelected = operatingSystem;
    this.OsSelected.emit(operatingSystem);

    if (operatingSystem === 'Windows'){
      this.flagWindows = true;
      this.flagLinux= false;
      this.flagMac= false;
    } else if (operatingSystem === 'Mac'){
        this.flagWindows = false;
        this.flagLinux= false;
        this.flagMac= true;
    } else {
      this.flagWindows = false;
        this.flagLinux= true;
        this.flagMac= false;
    }
  }

  flagWindows: boolean = true;
  flagLinux: boolean = false;
  flagMac : boolean = false;



  ngOnInit(): void {
  }
}
