import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class FilterServicesService {
  constructor() {}

  url: string = 'http://localhost:fakeurl/';
  async getSingleEnvironment(obj: any) {
    const response = await axios.get(this.url + obj);
    return response.data;
  }
}
