/// <reference types="@angular/localize" />

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { register as registerSwiperElements } from 'swiper/element/bundle';

if (environment.production) {
  enableProdMode();
}

registerSwiperElements();

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
