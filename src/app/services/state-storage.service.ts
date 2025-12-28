import { Injectable } from '@angular/core';
import { FlagStorage, StringStorage } from '../utils/state-storage';

@Injectable({
  providedIn: 'root'
})
export class StateStorageService {

  private readonly storeSelectedLanguage = new StringStorage('rosary.language');
  private readonly storeNavigationOnFlag = new FlagStorage('rosary.navigation');

  constructor() { }

  get selectedLanguage(): StringStorage {
    return this.storeSelectedLanguage;
  }

  get navigationOnFlag(): FlagStorage {
    return this.storeNavigationOnFlag;
  }

}

