import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomemadeGoodsComponent } from './homemade-goods/homemade-goods.component';
import { JmHomeComponent } from './jm-home/jm-home.component';
import { GeographyComponent } from './geography/geography.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  
  { path: '', component: JmHomeComponent },
  { path: 'geography', component: GeographyComponent },
  { path: 'landmarks', component: LandmarksComponent },
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
