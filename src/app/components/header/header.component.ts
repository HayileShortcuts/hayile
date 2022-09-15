import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import { ShortcutsBoxComponent } from '../shortcuts-box/shortcuts-box.component';
const html2pdf = require('html2pdf.js');

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'openCloseAnimation',
      [
        transition(
          ':enter',
          [
            style({ transform: 'translateX(-100%)'}),
            animate('300ms ease-in-out',
              style({ transform: 'translateX(0%)'}))
          ]
        ),
        transition(
          ':leave',
          [
            style({ transform: 'translateX(0%)'}),
            animate('300ms ease-in-out',
              style({ transform: 'translateX(-100%)'}))
          ]
        )
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.closeMenu();
  }

  statusOfMenu: boolean = false;

  constructor() {
  }

  @Output()
  openedMenu = new EventEmitter<boolean>();
  @Output()
  envSelected = new EventEmitter<string>();

  envSelect(env: string) {
    this.envSelected.emit(env);
    this.displayMenu();
  }

  displayMenu() {
    this.statusOfMenu = !this.statusOfMenu;
  }

  closeMenu() {
    this.statusOfMenu = false;
  }

  download(){
    var ShortcutsBoxComponent = document.getElementById('pdfTable');
    html2pdf(ShortcutsBoxComponent);
    var opt = {
    margin: [5, 5],
    filename:'Shortcuts.pdf',
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
 
  html2pdf().from(ShortcutsBoxComponent).set(opt).open();
  }
  
  // @ViewChild('pdfTable')
  // pdfTable!: ElementRef;

  // public createPdf() {
  //   const pdfTable = this.pdfTable.nativeElement;
  //   var html = htmlToPdfmake(pdfTable.innerHTML);
  //   const documentDefinition: any = {
  //     info: {
  //       title: 'Cheat Sheet',
  //       author: 'Hayile',
  //       subject: 'Download Cheat Sheet',
  //     },
  //     content: [
  //       {
  //         svg: '<svg width="125" height="39" viewBox="0 0 125 39" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="3.56583" height="8.97628" rx="1.78291" transform="matrix(0.373535 -0.927616 0.908521 0.417839 2.05566 7.32947)" fill="#0B2033"/><rect width="3.37544" height="11.6048" rx="1.68772" transform="matrix(0.985827 0.167763 -0.147373 0.989081 7.71021 1.31421)" fill="#0B2033"/><rect width="3.37544" height="11.6048" rx="1.68772" transform="matrix(0.985827 0.167763 -0.147373 0.989081 7.71021 1.31421)" fill="#0B2033"/><circle cx="18.5" cy="19.8134" r="16.1059" transform="rotate(-9.31302 18.5 19.8134)" fill="#0B2033"/><rect x="5.64746" y="17.2047" width="24.5219" height="9.30823" rx="4.65412" transform="rotate(-9.31302 5.64746 17.2047)" fill="white"/><rect x="27.3108" y="19.4827" width="1.96854" height="5.22216" rx="0.984272" transform="rotate(141.869 27.3108 19.4827)" fill="#0B2033"/><rect x="22.0364" y="20.7427" width="1.96854" height="5.22216" rx="0.984272" transform="rotate(-142.368 22.0364 20.7427)" fill="#0B2033"/><rect width="1.96854" height="5.22216" rx="0.984272" transform="matrix(0.876808 0.48084 0.48084 -0.876808 8.80371 22.0458)" fill="#0B2033"/><rect width="1.96854" height="5.22216" rx="0.984272" transform="matrix(0.681707 -0.731625 -0.731625 -0.681707 14.2129 22.4283)" fill="#0B2033"/><path d="M52.696 22.712C52.5093 23.0427 52.2427 23.1173 51.896 22.936L47.384 20.408C47.1173 20.2533 46.984 20.024 46.984 19.72C46.984 19.4693 47.1173 19.2667 47.384 19.112L51.896 16.6C52.232 16.424 52.4987 16.4987 52.696 16.824C52.872 17.1653 52.792 17.432 52.456 17.624L48.2 19.976V19.528L52.472 21.928C52.8027 22.1253 52.8773 22.3867 52.696 22.712ZM57.086 25C56.91 25 56.7527 24.9333 56.614 24.8C56.4807 24.6613 56.414 24.504 56.414 24.328V14.824C56.414 14.648 56.4807 14.4933 56.614 14.36C56.7527 14.2213 56.91 14.152 57.086 14.152C57.262 14.152 57.4167 14.2213 57.55 14.36C57.6887 14.4933 57.758 14.648 57.758 14.824V18.84H64.286V14.824C64.286 14.648 64.3527 14.4933 64.486 14.36C64.6193 14.2213 64.7767 14.152 64.958 14.152C65.134 14.152 65.2887 14.2213 65.422 14.36C65.5607 14.4933 65.63 14.648 65.63 14.824V24.328C65.63 24.504 65.5607 24.6613 65.422 24.8C65.2887 24.9333 65.134 25 64.958 25C64.7767 25 64.6193 24.9333 64.486 24.8C64.3527 24.6613 64.286 24.504 64.286 24.328V20.184H57.758V24.328C57.758 24.504 57.6887 24.6613 57.55 24.8C57.4167 24.9333 57.262 25 57.086 25ZM68.4489 24.936C68.0222 24.7707 67.8942 24.4773 68.0649 24.056L71.8729 14.68C72.0329 14.328 72.2835 14.152 72.6249 14.152H72.6569C73.0035 14.168 73.2382 14.344 73.3609 14.68L77.2329 24.056C77.4035 24.4773 77.2809 24.7707 76.8649 24.936C76.4435 25.1013 76.1502 24.9787 75.9849 24.568L75.1209 22.472H70.1369L69.3129 24.568C69.1475 24.984 68.8595 25.1067 68.4489 24.936ZM70.6649 21.128H74.5689L72.5769 16.28L70.6649 21.128ZM81.9963 25C81.5483 25 81.3243 24.776 81.3243 24.328V21.064L77.6603 15.224C77.4363 14.84 77.5056 14.5253 77.8683 14.28C78.2523 14.0453 78.5616 14.1147 78.7963 14.488L81.9963 19.624L85.3563 14.488C85.4683 14.312 85.6043 14.208 85.7643 14.176C85.9243 14.1387 86.0923 14.184 86.2683 14.312C86.6576 14.552 86.7269 14.856 86.4763 15.224L82.6683 21.064V24.328C82.6683 24.776 82.4443 25 81.9963 25ZM89.336 25C89.1067 25 88.936 24.9467 88.824 24.84C88.7173 24.728 88.664 24.5573 88.664 24.328V14.84C88.664 14.6053 88.7173 14.4347 88.824 14.328C88.936 14.2213 89.1067 14.168 89.336 14.168C89.5707 14.168 89.7413 14.2213 89.848 14.328C89.9547 14.4347 90.008 14.6053 90.008 14.84V24.328C90.008 24.5573 89.9547 24.728 89.848 24.84C89.7413 24.9467 89.5707 25 89.336 25ZM94.0079 25C93.5599 25 93.3359 24.776 93.3359 24.328V14.824C93.3359 14.376 93.5599 14.152 94.0079 14.152C94.4559 14.152 94.6799 14.376 94.6799 14.824V23.656H99.1119C99.5599 23.656 99.7839 23.88 99.7839 24.328C99.7839 24.776 99.5599 25 99.1119 25H94.0079ZM102.664 25C102.216 25 101.992 24.776 101.992 24.328V14.824C101.992 14.376 102.216 14.152 102.664 14.152H108.408C108.856 14.152 109.08 14.376 109.08 14.824C109.08 15.272 108.856 15.496 108.408 15.496H103.336V18.856H106.52C106.968 18.856 107.192 19.08 107.192 19.528C107.192 19.976 106.968 20.2 106.52 20.2H103.336V23.656H108.408C108.856 23.656 109.08 23.88 109.08 24.328C109.08 24.776 108.856 25 108.408 25H102.664ZM111.233 27.448C110.977 27.448 110.787 27.368 110.665 27.208C110.542 27.048 110.513 26.84 110.577 26.584L113.857 13.848C113.969 13.496 114.187 13.32 114.513 13.32C114.769 13.32 114.958 13.4027 115.081 13.568C115.209 13.728 115.233 13.9333 115.153 14.184L111.889 26.92C111.793 27.272 111.574 27.448 111.233 27.448ZM117.157 22.712C116.976 22.3867 117.05 22.1253 117.381 21.928L121.653 19.528V19.976L117.397 17.624C117.061 17.432 116.981 17.1653 117.157 16.824C117.354 16.4987 117.621 16.424 117.957 16.6L122.469 19.112C122.736 19.2667 122.869 19.4693 122.869 19.72C122.869 20.024 122.736 20.2533 122.469 20.408L117.957 22.936C117.61 23.1173 117.344 23.0427 117.157 22.712Z" fill="#0B2033"/></svg>',
  //         alignment: 'center',
  //       },
  //       {
  //         layout: 'lightHorizontalLines',
  //         table: {
  //           headerRows: 1,
  //           widths: [900],

  //           body: [['Shortcuts'], [html]],
  //         },
  //       },
  //     ],
  //     pageMargins: [40, 40, 40, 60],
  //     pageOrientation: 'landscape',
  //   };
  //   pdfMake.createPdf(documentDefinition).open();
  // }

}
