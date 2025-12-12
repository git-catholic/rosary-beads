import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolyRosaryHomeComponent } from './rosary-prayers/holy-rosary/home/holy-rosary-home.component';
import { HolyRosaryDisplayComponent } from './rosary-prayers/holy-rosary/prayer/holy-rosary-display.component';

export const HOLY_ROSARY_HOME = 'holy-rosary-home';
export const HOLY_ROSARY_PRAYER = 'holy-rosary-prayer';
export const PRAYER_HOME = 'prayer-home';

export const APP_HOME = HOLY_ROSARY_HOME;
// export const APP_HOME = PRAYER_HOME;

const routes: Routes = [
  // { path: 'testing/layout', component: LayoutsComponent },
  // { path: 'testing/buzz', component: BuzzFeedbackComponent },
  { path: HOLY_ROSARY_PRAYER + '/:mystery', component: HolyRosaryDisplayComponent },
  { path: APP_HOME, component: HolyRosaryHomeComponent },
  // { path: PRAYER_HOME, component: PrayerHomeComponent },
  { path: '', redirectTo: APP_HOME, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
