import { Injectable } from '@angular/core';
import axios from 'axios';
import { ShortcutsEnvironment } from '../models/ShortcutsEnvironment';

@Injectable({
  providedIn: 'root',
})
export class FilterServicesService {
  dataReceivedFromApi: [] = [];

  constructor() { }

  url: string = 'http://localhost:fakeurl/';
  async getSingleEnvironment(obj: any) {
    const response = await axios.get(this.url + obj);
    return response.data;
  }

  getDataFromApi(environment: string): Promise<ShortcutsEnvironment> {
    return axios
      .get(`https://hayile-backend.herokuapp.com/${environment}`)
      .then((response) => response.data)
  }
}
