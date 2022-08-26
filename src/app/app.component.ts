import { Component } from '@angular/core';
import { FilterServicesService } from './services/filter-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hayile';

  dataReceivedFromService: any = [];
  dataDisplayed: any;

  searchedText = "";
  selectedSO: 'Windows' | 'Apple' | 'Linux' = 'Windows'; // Sistema operativo por defecto Windows

  constructor(private filterServicesService: FilterServicesService) {
    this.filterServicesService.getDataFromApi()
      .then(data => {
        this.dataReceivedFromService = data;
        console.log(this.dataReceivedFromService)
        console.log(this.selectedSO)

        this.dataDisplayed = this.dataReceivedFromService.filter((e: { operatingSystem: string; }) => {
          return e.operatingSystem === this.selectedSO;
        })
        console.log(this.dataDisplayed)
      })
  }


  getOs(OsToFilter: any) {
    this.selectedSO = OsToFilter;
    this.dataDisplayed = this.dataReceivedFromService.filter(((e: { operatingSystem: string; }) => e.operatingSystem == this.selectedSO));
    console.log("EStoy cambiando el SO a "+ this.selectedSO);
    console.log("Este el archivo filtrado por SO");
    console.log(this.dataDisplayed);
  }

}


