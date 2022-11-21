import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomemadeGoodsComponent } from './homemade-goods/homemade-goods.component';
import { JmHomeComponent } from './jm-home/jm-home.component';
import { GeographyComponent } from './geography/geography.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomemadeGoodsComponent,
    JmHomeComponent,
    GeographyComponent,
    LandmarksComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
