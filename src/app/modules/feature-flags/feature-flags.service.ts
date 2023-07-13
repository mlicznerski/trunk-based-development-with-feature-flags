import { Injectable } from '@angular/core';
import { FeatureConfig } from './feature-config.interface';
import { has, get } from 'lodash';
import { environment } from 'src/environments/environment';
import { AvailableFeatures } from './available-features';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  config: FeatureConfig | null = null;

  constructor() {
    this.allowModifyingFlagsFromDevTools();
  }

  async loadConfig() {
    // TODO: load business flags from API?
    this.config = environment.features;
  }

  isFeatureEnabled(key: AvailableFeatures) {
    if (this.config && has(this.config, key)) {
      return get(this.config, key, false);
    }

    return false;
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
    if (!this.config || !has(this.config, key)) {
      throw new Error(`Feature Flag "${key}" not found`);
    }

    this.config[key] = value;
  }
}
