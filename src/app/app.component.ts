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
  environment: string = 'VisualStudioCode';
  selectedSO: OS = 'Windows';

  constructor(private filterServicesService: FilterServicesService) {}

  getOs(OsToFilter: any) {
    this.selectedSO = OsToFilter;
    this.dataDisplayed = this.dataReceivedFromService.filter(
      (e: { operatingSystem: string }) => e.operatingSystem == this.selectedSO
    );
  }

  changeEnv(env: string) {
    this.environment = env;
    this.loadFromDB();
  }
  ngOnInit() {
    this.loadFromDB();
  }
  loadFromDB() {
    console.log(this.environment);
    this.filterServicesService.getDataFromApi(this.environment).then((data) => {
      this.dataReceivedFromService = data;
      this.dataDisplayed = this.dataReceivedFromService.filter(
        (e: { operatingSystem: string }) => {
          return e.operatingSystem === this.selectedSO;
        }
      );
    });
  }
}
