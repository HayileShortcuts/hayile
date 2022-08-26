import { Component } from '@angular/core';
import { OS } from './models/ShortcutsEnvironment';
import { FilterServicesService } from './services/filter-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hayile';

  dataReceivedFromService: any = [];
  dataDisplayed: any = [];

  searchedText = "";
  selectedSO: OS = "Windows";

  constructor(private filterServicesService: FilterServicesService) {
    this.filterServicesService.getDataFromApi()
      .then(data => {
        this.dataReceivedFromService = data;
        this.dataDisplayed = this.dataReceivedFromService.filter((e: { operatingSystem: string; }) => {
          return e.operatingSystem === this.selectedSO;
        })
      })
  }


  getOs(OsToFilter: any) {
    this.selectedSO = OsToFilter;
    this.dataDisplayed = this.dataReceivedFromService.filter(((e: { operatingSystem: string; }) => e.operatingSystem == this.selectedSO));
  }

}


