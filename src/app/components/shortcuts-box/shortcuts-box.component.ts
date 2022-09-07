import { Component, Input, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
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

  createPdf(){
    const pdfDefinition: any = {
      content: [{
        pageSize: 'A4',
        text: this.dataFromService 
      }]
    }
    const pdf= pdfMake.createPdf(pdfDefinition).open()
  }
}
