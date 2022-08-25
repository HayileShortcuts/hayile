import { Injectable } from '@angular/core';
import axios from 'axios';
import { Tshortcuts } from "../models/Tshortcuts"

@Injectable({
  providedIn: 'root',
})


export class FilterServicesService {
  
  dataReceivedFromApi: [] = [];
  
  constructor() {}

  url: string = 'http://localhost:fakeurl/';
  async getSingleEnvironment(obj: any) {
    const response = await axios.get(this.url + obj);
    return response.data;
  }

  getDataFromApi(): Promise<Tshortcuts> {
    return axios.get('http://localhost:3000/VisualStudioCode')
    .then(response => response.data)
  }
}

