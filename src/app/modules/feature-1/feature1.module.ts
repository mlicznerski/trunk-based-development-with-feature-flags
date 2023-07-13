import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1HomeComponent } from './containers/feature1-home.component';

const routes: Routes = [{ path: '', component: Feature1HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature1Module {}
