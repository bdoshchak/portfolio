import * as amplitude from '@amplitude/analytics-browser';

let initialized = false;

export function init(): void {
  if (initialized) return;
  const key = import.meta.env.PUBLIC_AMPLITUDE_API_KEY;
  if (!key) return;
  amplitude.init(key, { defaultTracking: true });
  initialized = true;
}

export function track(event: string, props?: Record<string, string | number | boolean>): void {
  amplitude.track(event, props);
}
