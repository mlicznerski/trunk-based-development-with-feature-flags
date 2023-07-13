import { AvailableFeatures } from './available-features';

export type FeatureConfig = Partial<Record<AvailableFeatures, boolean>>;
