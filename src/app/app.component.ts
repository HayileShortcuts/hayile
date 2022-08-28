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
  environment: string = 'VisualStudioCode';
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
      this.searchedText = inputText;
      // console.log(this.searchedText)
  }
    // console.log(
    //   this.dataDisplayed
    //     .at(0)
    //     .shortcuts.filter((e: any) =>
    //       console.log(e.values.filter((e: any) => e.description.includes(inputText)))
    //     )
    // );
    
    
    // let shortcutsFiletered = [];
   
    // for (let i=0; i < this.dataDisplayed[0].shortcuts.length; i++){ //Recorremos cada uno del array shortcuts
    //   console.log("Vuelta "+ i);
    //   let aux = [];
    //   aux.push(this.dataDisplayed[0].shortcuts[i]);
    
    //   let alfalfa = this.dataDisplayed[0].shortcuts[i].values.filter((e: { description: string | string[]; }) => e.description.includes(inputText))
      


    // }

    // console.log(aux) 
      
 
  
}

    //   this.searchedText = inputText;

    //   console.log(
    //     this.dataDisplayed
    //       .at(0)
    //       .shortcuts.filter((e: any) =>
    //         e.values.filter((e: any) => e.description.includes(inputText))
    //       )
    //   );
  


