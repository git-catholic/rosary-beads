import { Injectable } from '@angular/core';
import { FlagStorage, StringStorage } from '../utils/state-storage';

@Injectable({
  providedIn: 'root'
})
export class StateStorageService {

  constructor() { }

  readonly selectedLanguage = new StringStorage('rosary.language');
  readonly navigationOnFlag = new FlagStorage('rosary.navigation');

}

