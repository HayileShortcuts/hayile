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
  }


  ngOnInit(): void {
  }
}
