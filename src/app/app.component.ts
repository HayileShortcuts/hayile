import { Component } from '@angular/core';
import { FilterServicesService } from './services/filter-services.service';
import { Tshortcuts } from "./models/Tshortcuts"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hayile';
  
  dataReceivedFromService: any;
  searchedText = "";
  selectedSO: 'Windows' | 'Apple' | 'Linux' = 'Windows'; // Sistema operativo por defecto apple
  
  constructor(private filterServicesService : FilterServicesService ){
    this.filterServicesService.getDataFromApi()
      .then(data => {
        this.dataReceivedFromService = data;
        console.log(this.dataReceivedFromService)
    })
    }
    
  
}


