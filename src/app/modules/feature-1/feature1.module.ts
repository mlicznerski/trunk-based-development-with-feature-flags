import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1HomeComponent } from './containers/feature1-home.component';
import { Feature2InitiallyHiddenComponent } from './components/feature2-initially-hidden.component';
import { FeatureFlagsModule } from '../feature-flags';
import { Feature3RefactorInProgressComponent } from './components/feature3-refactor-in-progress.component';

const routes: Routes = [{ path: '', component: Feature1HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), FeatureFlagsModule],
  exports: [RouterModule],
  declarations: [
    Feature1HomeComponent,
    Feature2InitiallyHiddenComponent,
    Feature3RefactorInProgressComponent,
  ],
})
export class Feature1Module {}
