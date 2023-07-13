export type AvailableFeatures =
  // development flag to hide feature during WIP
  | 'dev-ticket-1-feature'
  // business flag to turn feature on in certain cases
  | 'biz-ticket-2-feature';

/**
 * Development feature flags removed after grace period.
 *
 * Kept as a reference to check if feature was fully implemented.
 */
export type RemovedFeatures = 'dev-ticket-0-feature';
