import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
@Output()
OsSelected = new EventEmitter<string>();
  constructor() { }
    osSelector(operativeSystem: string){
      this.OsSelected.emit(operativeSystem)
      console.log(operativeSystem)
    }
  ngOnInit(): void {
  }
}