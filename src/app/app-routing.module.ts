import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuzzFeedbackComponent } from './components/testing/buzz-feedback/buzz-feedback.component';
import { LayoutsComponent } from './components/testing/layouts/layouts.component';
import { HolyRosaryHomeComponent } from './rosary-prayers/holy-rosary/holy-rosary-home.component';

const routes: Routes = [
  { path: 'testing/layout', component: LayoutsComponent },
  { path: 'testing/buzz', component: BuzzFeedbackComponent },
  { path: 'holy-rosary', component: HolyRosaryHomeComponent },
  { path: '', redirectTo: 'holy-rosary', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
