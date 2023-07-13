import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { FeatureFlagsService } from './feature-flags.service';

export const canMatchFeature: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return inject(FeatureFlagsService).isFeatureEnabled$(route?.data?.['feature']);
};
