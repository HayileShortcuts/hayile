import { Component } from '@angular/core';
import { OS } from './models/ShortcutsEnvironment';
import { FilterServicesService } from './services/filter-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hayile';
  searchedText = '';
  dataReceivedFromService: any = [];
  dataDisplayed: any = [];
  environment: string = 'visualstudiocode';
  selectedSO: OS = 'Windows';

  constructor(private filterServicesService: FilterServicesService) {
    this.filterServicesService.getDataFromApi(this.environment).then((data) => {
      this.dataReceivedFromService = data;
      this.dataDisplayed = this.dataReceivedFromService.filter(
        (e: { operatingSystem: string }) => {
          return e.operatingSystem === this.selectedSO;
        }
      );
    });
  }

  getOs(OsToFilter: any) {
    this.selectedSO = OsToFilter;
    this.dataDisplayed = this.dataReceivedFromService.filter(
      (e: { operatingSystem: string }) => e.operatingSystem == this.selectedSO
    );
  }

  filterFromSearchBar(inputText: string) {
    console.log(inputText);
    console.log(this.dataDisplayed);
    //   this.searchedText = inputText;

    //   console.log(
    //     this.dataDisplayed
    //       .at(0)
    //       .shortcuts.filter((e: any) =>
    //         e.values.filter((e: any) => e.description.includes(inputText))
    //       )
    //   );
  }
}
