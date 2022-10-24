import { Injectable } from '@angular/core';
import axios from 'axios';
import { ShortcutsEnvironment } from '../models/ShortcutsEnvironment';

@Injectable({
  providedIn: 'root',
})
export class FilterServicesService {
  dataReceivedFromApi: [] = [];

  constructor() {}

  async getDataFromApi(environment: string): Promise<ShortcutsEnvironment> {
    const response = await axios.get(
      `https://hayile-hayileshortcuts.koyeb.app/api/shortcuts/${environment}`
    );
    return response.data;
  }
}
