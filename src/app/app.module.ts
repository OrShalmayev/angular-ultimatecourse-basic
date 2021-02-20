import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassandstyleComponent } from './components/classandstyle/classandstyle.component';

import { PassengerDashboardModule } from './passenger-dashboard/passeger-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    ClassandstyleComponent,
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    AppRoutingModule,
    // Custom Modules
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
