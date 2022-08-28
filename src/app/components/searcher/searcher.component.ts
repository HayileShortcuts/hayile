import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  @Output()
  inputText = new EventEmitter<string>();
  search: any;
  constructor() {}

  ngOnInit(): void {}

  onSearch(): void {
    this.inputText.emit(this.search);
  }
}
