import { FeatureConfig } from 'src/app/modules/feature-flags';

export interface Environment {
  production: boolean;
  features: FeatureConfig;
}
