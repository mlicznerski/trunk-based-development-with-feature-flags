import { ApplicationRef, Injectable } from '@angular/core';
import { FeatureConfig } from './feature-config.interface';
import { has, get } from 'lodash';
import { environment } from 'src/environments/environment';
import { AvailableFeatures } from './available-features';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  config$ = new BehaviorSubject<FeatureConfig | null>(null);

  constructor(private appRef: ApplicationRef) {
    this.allowModifyingFlagsFromDevTools();
  }

  async loadConfig() {
    // TODO: load business flags from API?
    this.config$.next(environment.features);
  }

  isFeatureEnabled$(key: AvailableFeatures) {
    return this.config$.pipe(
      map((config) => {
        if (config && has(config, key)) {
          return get(config, key, false);
        }

        return false;
      })
    );
  }

  /**
   * Allows to update flag from Browser's DevTools. Example:
   *
   * `window.featureFlags.updateFlag('test', true); // window can be omitted`
   */
  private allowModifyingFlagsFromDevTools() {
    if (!environment.production) {
      (window as any).featureFlags = this;
    }
  }

  public updateFlag(key: AvailableFeatures, value: boolean) {
    if (!this.config$.value) {
      throw new Error(`Config not initialized`);
    }

    this.config$.next({
      ...this.config$.value,
      [key]: value,
    });

    this.appRef.tick();
  }
}
