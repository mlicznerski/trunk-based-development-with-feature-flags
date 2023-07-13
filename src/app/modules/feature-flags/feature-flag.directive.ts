import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeatureFlagsService } from './feature-flags.service';
import { AvailableFeatures } from './available-features';

@Directive({
  selector: '[featureFlag]',
})
export class FeatureFlagDirective implements OnInit {
  @Input() featureFlag: AvailableFeatures | undefined;

  constructor(
    private template: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private featureFlagService: FeatureFlagsService
  ) {}

  ngOnInit() {
    if (!this.featureFlag) {
      return;
    }

    const isEnabled = this.featureFlagService.isFeatureEnabled(
      this.featureFlag
    );

    if (isEnabled) {
      this.viewContainerRef.createEmbeddedView(this.template);
    }
  }
}
