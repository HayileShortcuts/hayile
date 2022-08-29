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
  searchedText = "";
  dataReceivedFromService: any = [];  // LLega todos los SO del entorno
  dataDisplayed: any = [];  // Lo que del servicio filtrado para conseguir solo el SO desedeado
  dataFiltered: any = [];  // dataDisplayed filtrado por el input de searchbar
  environment: string = 'vsc';
  selectedSO: OS = 'Windows';
  statusOfMenu: boolean = false;





  constructor(private filterServicesService: FilterServicesService) { }

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
    this.filterServicesService.getDataFromApi(this.environment).then((data) => {
      this.dataReceivedFromService = data;
      this.dataDisplayed = this.dataReceivedFromService.filter(
        (e: { operatingSystem: string }) => {
          return e.operatingSystem === this.selectedSO;
        }
      );
    });
  }

  filterFromSearchBar(inputText: string) {
    this.searchedText = inputText;

  }
  setStatusOfMenu(status: boolean) {
    this.statusOfMenu = status;
  }
}


