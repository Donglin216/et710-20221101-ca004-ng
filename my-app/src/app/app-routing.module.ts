import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomemadeGoodsComponent } from './homemade-goods/homemade-goods.component';
import { JmHomeComponent } from './jm-home/jm-home.component';
import { GeographyComponent } from './geography/geography.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HousingComponent } from './housing/housing.component';
import { DemographicComponent } from './demographic/demographic.component';
import { ParksComponent } from './parks/parks.component';
import { SchoolsComponent } from './schools/schools.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TransportationComponent } from './transportation/transportation.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  
  { path: '', component: JmHomeComponent },
  { path: 'geography', component: GeographyComponent },
  { path: 'landmarks', component: LandmarksComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'housing', component: HousingComponent },
  { path: 'demographic', component: DemographicComponent },
  { path: 'parks', component: ParksComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'transportation', component: TransportationComponent },
  { path: 'contact', component: ContactComponent },
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
