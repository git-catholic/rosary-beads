import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePrayerComponent } from './components/active-prayer/active-prayer.component';
import { DeviceDetailsComponent } from './components/config/device-details/device-details.component';
import { MainConfigComponent } from './components/config/main-config/main-config.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LiturgicalDatesComponent } from './components/liturgical-dates/liturgical-dates.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NoticesComponent } from './components/notices/notices.component';
import { RotateDivComponent } from './components/rotate-div/rotate-div.component';
import { BuzzFeedbackComponent } from './components/testing/buzz-feedback/buzz-feedback.component';
import { LayoutsComponent } from './components/testing/layouts/layouts.component';
import { EndComponent } from './prayers/end/end.component';
import { PatsBeadsComponent } from './rosary-beads/pats-beads/pats-beads.component';
import { CurrentPrayerComponent } from './rosary-prayers/holy-rosary/current-prayer/current-prayer.component';
import { HolyRosaryHomeComponent } from './rosary-prayers/holy-rosary/holy-rosary-home.component';
import { HolyRosaryPrayerComponent } from './rosary-prayers/holy-rosary/holy-rosary-prayer/holy-rosary-prayer.component';
import { MysteryDisplayComponent } from './rosary-prayers/holy-rosary/mystery-display/mystery-display.component';
import { MysterySelectorComponent } from './rosary-prayers/holy-rosary/mystery-selector/mystery-selector.component';
import { AppHammerConfig } from './services/app-hammer-config';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePrayerComponent,
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
    DeviceDetailsComponent,
    MainConfigComponent,
    LanguageSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HammerModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: AppHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
