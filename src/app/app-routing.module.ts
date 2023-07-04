import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'testing/layout', component: LayoutsComponent },
  // { path: 'testing/buzz', component: BuzzFeedbackComponent },
  // { path: 'holy-rosary', component: HolyRosaryHomeComponent },
  // { path: '', redirectTo: 'holy-rosary', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
