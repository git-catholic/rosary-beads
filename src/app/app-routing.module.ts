import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // { path: 'testing/layout', component: LayoutsComponent },
  // { path: 'testing/buzz', component: BuzzFeedbackComponent },
  { path: 'prayer-home', component: HomeComponent },
  { path: '', redirectTo: 'prayer-home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
