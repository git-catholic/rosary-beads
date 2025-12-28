import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { RosaryTranslateModule } from './modules/rosary-translate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RosaryTranslateModule
  ],
  exports: [
    RosaryTranslateModule
  ],
  providers: [
    provideHttpClient(),
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
