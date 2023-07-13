import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeatureFlagsService } from './feature-flags.service';
import { AvailableFeatures } from './available-features';
import { Subject, takeUntil } from 'rxjs';

/**
 * Example usages:
 *
 * 1. Show component only when flag is disabled - useful for refactoring existing component
 */
@Directive({
  selector: '[featureFlagDisabled]',
})
export class FeatureFlagDisabledDirective implements OnInit {
  @Input() featureFlagDisabled: AvailableFeatures | undefined;

  private _onDestroy$ = new Subject<void>();
  private _viewRef: EmbeddedViewRef<any> | undefined;

  constructor(
    private template: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private featureFlagService: FeatureFlagsService
  ) {}

  ngOnInit() {
    if (!this.featureFlagDisabled) {
      return;
    }

    this.featureFlagService
      .isFeatureEnabled$(this.featureFlagDisabled)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((isEnabled) => {
        if (!isEnabled) {
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
