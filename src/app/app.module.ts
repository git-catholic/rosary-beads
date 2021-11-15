import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentPrayerComponent } from './components/holy-rosary/current-prayer/current-prayer.component';
import { MysteryDisplayComponent } from './components/holy-rosary/mystery-display/mystery-display.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/testing/layouts/layouts.component';
import { LiturgicalDatesComponent } from './components/common/liturgical-dates/liturgical-dates.component';
import { MysterySelectorComponent } from './components/mystery-selector/mystery-selector.component';
import { NoticesComponent } from './components/notices/notices.component';
import { PatsBeadsComponent } from './components/common/beads-pat/pats-beads.component';
import { EndComponent } from './prayers/end/end.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RotateDivComponent } from './components/rotate-div/rotate-div.component';
import * as Hammer from 'hammerjs';
import { BuzzFeedbackComponent } from './components/testing/buzz-feedback/buzz-feedback.component';
import { RosaryConfigComponent } from './components/holy-rosary/rosary-config/rosary-config.component';
import { CommonConfigComponent } from './components/common/common-config/common-config.component';
import { PrayerConfigComponent } from './components/holy-rosary/prayer-config/prayer-config.component';
import { HolyRosaryHomeComponent } from './components/holy-rosary/holy-rosary-home.component';
import { HolyRosaryPrayerComponent } from './components/holy-rosary/holy-rosary-prayer/holy-rosary-prayer.component';

@Injectable({
  providedIn: 'root'
})
export class AppHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'swipe': { enable: true, direction: Hammer.DIRECTION_HORIZONTAL},
    'pinch': { enable: false },
    'rotate': { enable: false }
  }

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-x'
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MysterySelectorComponent,
    HolyRosaryHomeComponent,
    HolyRosaryPrayerComponent,
    NoticesComponent,
    PatsBeadsComponent,

    EndComponent,
    LiturgicalDatesComponent,
    LayoutsComponent,
    HomeComponent,
    MysteryDisplayComponent,
    CurrentPrayerComponent,
    HeaderComponent,
    NavigationComponent,
    RotateDivComponent,
    BuzzFeedbackComponent,
    RosaryConfigComponent,
    CommonConfigComponent,
    PrayerConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HammerModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: AppHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
