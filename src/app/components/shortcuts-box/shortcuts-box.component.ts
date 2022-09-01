import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shortcuts-box',
  templateUrl: './shortcuts-box.component.html',
  styleUrls: ['./shortcuts-box.component.scss'],
})
export class ShortcutsBoxComponent {
  @Input() dataFromService: any;
  @Input() inputFromSearcher: any;

  dataForPaint: any = [];

  constructor() {}
  loading: boolean = true;

  getActualSOShortCuts() {
    this.dataForPaint = this.dataFromService;
    return this.dataForPaint[0].shortcuts.filter(
      (short: any) =>
        this.getFilteredOptionsByUserQuery(short.values).length > 0
    );
  }

  getFilteredOptionsByUserQuery(values: any) {
    this.loading = false;
    return values.filter((value: any) =>
      value.description
        .toLowerCase()
        .includes(this.inputFromSearcher.toLowerCase())
    );
  }
}
