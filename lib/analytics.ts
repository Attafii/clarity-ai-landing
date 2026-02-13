export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(eventName, { props });
  }
}

export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('pageview', { u: url });
  }
}
