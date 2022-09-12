import { Component } from '@angular/core';
import { OS } from './models/ShortcutsEnvironment';
import { FilterServicesService } from './services/filter-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hayile';
  searchedText = '';
  dataReceivedFromService: any = []; // LLega todos los SO del entorno
  dataDisplayed: any = []; // Lo que del servicio filtrado para conseguir solo el SO desedeado
  dataFiltered: any = []; // dataDisplayed filtrado por el input de searchbar
  environment: string = 'vsc';
  selectedSO: OS = 'Windows';

  constructor(
    private filterServicesService: FilterServicesService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((e) => {
      this.environment = e['environment'];
      this.loadFromDB();
    });
  }

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
  ngOnInit() {}
  loadFromDB() {
    if (!this.environment) {
      this.environment = 'vsc';
    }
    if (this.environment.length > 0){
      this.filterServicesService.getDataFromApi(this.environment).then((data) => {
      this.dataReceivedFromService = data;
      this.dataDisplayed = this.dataReceivedFromService.filter(
        (e: { operatingSystem: string }) => {
          return e.operatingSystem === this.selectedSO;
        }
      );
    });}
    else {
      this.environment = "vsc";
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

  filterFromSearchBar(inputText: string) {
    this.searchedText = inputText;
  }
}
