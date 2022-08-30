import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
