import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrayerHomeComponent } from './components/prayer-home/prayer-home.component';
import { HolyRosaryHomeComponent } from './rosary-prayers/holy-rosary/home/holy-rosary-home.component';
import { HolyRosaryDisplayComponent } from './rosary-prayers/holy-rosary/prayer/holy-rosary-display.component';
import { PatsBeadsComponent } from './rosary-beads/pats-beads/pats-beads.component';

export const HOLY_ROSARY_HOME = 'holy-rosary-home';
export const HOLY_ROSARY_PRAYER = 'holy-rosary-prayer';
export const PRAYER_HOME = 'prayer-home';

const routes: Routes = [
  // { path: 'testing/layout', component: LayoutsComponent },
  // { path: 'testing/buzz', component: BuzzFeedbackComponent },
  // { path: HOLY_ROSARY_PRAYER + '/:mystery', component: HolyRosaryPrayerComponent },
  // { path: 'pats-beads', component: PatsBeadsComponent },
  { path: HOLY_ROSARY_PRAYER + '/:mystery', component: HolyRosaryDisplayComponent },
  { path: HOLY_ROSARY_HOME, component: HolyRosaryHomeComponent },
  { path: PRAYER_HOME, component: PrayerHomeComponent },
  // { path: PRAYER_HOME, component: ParentComponent },
  { path: '', redirectTo: PRAYER_HOME, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
