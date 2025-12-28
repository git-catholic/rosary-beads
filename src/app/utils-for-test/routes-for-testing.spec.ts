import { Routes } from "@angular/router";
import { APP_HOME } from "../app-routing.module";
import { HolyRosaryHomeComponent } from "../rosary-prayers/holy-rosary/home/holy-rosary-home.component";

export const testRoutes: Routes = [
  { path: APP_HOME, component: HolyRosaryHomeComponent },
  { path: '', redirectTo: APP_HOME, pathMatch: 'full' }
];
