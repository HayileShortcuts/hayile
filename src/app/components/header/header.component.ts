import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

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


}
