import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFlagDirective } from './feature-flag.directive';
import { FeatureFlagDisabledDirective } from './feature-flag-disabled.directive';

@NgModule({
  declarations: [FeatureFlagDirective, FeatureFlagDisabledDirective],
  imports: [CommonModule],
  exports: [FeatureFlagDirective, FeatureFlagDisabledDirective],
  providers: [],
})
export class FeatureFlagsModule {}
