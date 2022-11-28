import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import {
  ShortcutsEnvironment,
  Shortcut,
  Value,
} from 'src/app/models/ShortcutsEnvironment';
@Component({
  selector: 'shortcuts-box',
  templateUrl: './shortcuts-box.component.html',
  styleUrls: ['./shortcuts-box.component.scss'],
})
export class ShortcutsBoxComponent {
  @Input() dataFromService: ShortcutsEnvironment[] = [];
  @Input() inputFromSearcher: string = '';

  dataForPaint: ShortcutsEnvironment[] = [];

  constructor() {}
  getActualSOShortCuts() {
    this.dataForPaint = this.dataFromService;
    if (this.dataForPaint.length === 0) {
      return [];
    }
    return this.dataForPaint[0].shortcuts.filter(
      (short: Shortcut) =>
        this.getFilteredOptionsByUserQuery(short.values).length > 0
    );
  }

  getFilteredOptionsByUserQuery(values: Value[]) {
    return values.filter((value: Value) =>
      value.description
        .toLowerCase()
        .includes(this.inputFromSearcher.toLowerCase())
    );
  }

  // @ViewChild('pdfTable')
  // pdfTable!: ElementRef;
}
