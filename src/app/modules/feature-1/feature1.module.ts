import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1HomeComponent } from './containers/feature1-home.component';
import { Feature2InitiallyHiddenComponent } from './containers/feature2-initially-hidden.component';
import { FeatureFlagsModule } from '../feature-flags';

const routes: Routes = [{ path: '', component: Feature1HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), FeatureFlagsModule],
  exports: [RouterModule],
  declarations: [Feature1HomeComponent, Feature2InitiallyHiddenComponent],
})
export class Feature1Module {}
