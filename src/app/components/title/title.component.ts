import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
@Output()
OsSelected = new EventEmitter<string>();

@Input()
currentlyOs: any;

winButton = document.getElementsByClassName("titleOS-button-windows");
macButton = document.getElementsByClassName("titleOS-button-mac");
linButton = document.getElementsByClassName("titleOS-button-linux");
winButton1 = document.getElementById("1");
macButton1 = document.getElementById("2");
linButton1 = document.getElementById("3");

  constructor() { }

    osSelector(operatingSystem: string){
      this.OsSelected.emit(operatingSystem)
      console.log(operatingSystem)
      if (operatingSystem === "Windows"){
        this.winButton1?.classList.add("selected")
      }
    }
  ngOnInit(): void {
  }


  // changeBackground(){
  //   if (this.currentlyOs === "Windows"){
  //     this.winButton.
  //   }
  // }
}