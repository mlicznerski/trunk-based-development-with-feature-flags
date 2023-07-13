import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeatureFlagsService } from './feature-flags.service';
import { AvailableFeatures } from './available-features';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[featureFlag]',
})
export class FeatureFlagDirective implements OnInit, OnDestroy {
  @Input() featureFlag: AvailableFeatures | undefined;

  private _onDestroy$ = new Subject<void>();
  private _viewRef: EmbeddedViewRef<any> | undefined;

  constructor(
    private template: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private featureFlagService: FeatureFlagsService
  ) {}

  ngOnInit() {
    if (!this.featureFlag) {
      return;
    }

    this.featureFlagService
      .isFeatureEnabled$(this.featureFlag)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((isEnabled) => {
        if (isEnabled) {
          if (this._viewRef) {
            // already created
            return;
          }

          this._viewRef = this.viewContainerRef.createEmbeddedView(
            this.template
          );
        } else if (this._viewRef) {
          this._viewRef.destroy();
          this._viewRef = undefined;
        }
      });
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
    this._viewRef?.destroy();
  }
}
