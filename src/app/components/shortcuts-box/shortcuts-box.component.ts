import { Component, Input, OnInit } from '@angular/core';
import { FilterServicesService } from 'src/app/services/filter-services.service';

@Component({
  selector: 'shortcuts-box',
  templateUrl: './shortcuts-box.component.html',
  styleUrls: ['./shortcuts-box.component.scss']
})
export class ShortcutsBoxComponent{
  @Input() dataFromService: any;

  constructor(){
    console.log("Estoy en ts de shortcuts")
    console.log(this.dataFromService)
  }
    
}
