import { Injectable } from '@angular/core';
import axios from 'axios';
import { ShortcutsEnvironment } from '../models/ShortcutsEnvironment';

@Injectable({
  providedIn: 'root',
})
export class FilterServicesService {
  dataReceivedFromApi: [] = [];

  constructor() {}

  getDataFromApi(environment: string): Promise<ShortcutsEnvironment> {
    return axios
      .get(`https://hayile-backend.herokuapp.com/api/shortcuts/${environment}`)
      .then((response) => response.data);
  }
}
