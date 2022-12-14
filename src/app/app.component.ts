import {Component} from '@angular/core';
import {OS} from './models/ShortcutsEnvironment';
import {FilterServicesService} from './services/filter-services.service';
import {ActivatedRoute} from '@angular/router';

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
      (e: { operativeSystem: string }) => e.operativeSystem == this.selectedSO
    );
  }

  changeEnv(env: string) {
    this.environment = env;
    this.loadFromDB();
  }

  ngOnInit() {
  }

  loadFromDB() {
    if (!this.environment) this.environment = 'vsc';
    this.filterServicesService.getDataFromApi(this.environment).then((data) => {
      this.dataReceivedFromService = data;
      this.dataDisplayed = this.dataReceivedFromService.filter(
        (e: { operativeSystem: string }) => {
          return e.operativeSystem === this.selectedSO;
        }
      );
    });
  }

  filterFromSearchBar(inputText: string) {
    this.searchedText = inputText;
  }
}
