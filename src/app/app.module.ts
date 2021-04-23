import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodayComponent } from './today/today.component';
import { WeekComponent } from './week/week.component';
import { WheatherService } from './wheather.service';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    WeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [WheatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
