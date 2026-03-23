/**
 * Performance monitoring utilities
 * Helps track Core Web Vitals and custom metrics
 */

export interface PerformanceMetrics {
  fcp?: number;  // First Contentful Paint
  lcp?: number;  // Largest Contentful Paint
  fid?: number;  // First Input Delay
  cls?: number;  // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  pageLoadTime?: number;
}

// Store metrics
const metrics: Partial<PerformanceMetrics> = {};

/**
 * Initialize performance monitoring
 * Uses Web Vitals API if available
 */
export function initializePerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Check if Web Vitals API is available
  if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    // Monitor Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            const firstSessionEntry =
              metrics.cls || 0;
            metrics.cls = (firstSessionEntry + layoutShiftEntry.value) as number;
          }
        }
      });
      clsObserver.observe({
        entryTypes: ['layout-shift'],
      });
    } catch (e) {
      // CLS not supported
    }
  }

  // Measure page load time
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      metrics.pageLoadTime = pageLoadTime;

      // Report metrics if available
      if (metrics.pageLoadTime > 3000) {
        console.warn('[Performance] Page load time is high:', metrics);
      }
    });
  }
}

/**
 * Send metrics to analytics/monitoring service
 */
export function reportPerformanceMetrics() {
  if (typeof window === 'undefined' || !metrics.pageLoadTime) return;

  // Only report if needed (not in development)
  if (process.env.NODE_ENV !== 'production') return;

  // You can integrate with your analytics service here
  // Example: sendToSentry, sendToDatadog, Google Analytics, etc.
  const payload = {
    timestamp: new Date().toISOString(),
    metrics,
    url: window.location.href,
  };

  // Log for now (integrate with your service)
  console.debug('[Metrics]', payload);
}

/**
 * Track a custom metric
 */
export function trackMetric(name: string, value: number, unit = 'ms') {
  if (typeof window === 'undefined') return;

  const message = `[Metric] ${name}: ${value}${unit}`;
  if (value > 1000) {
    console.warn(message);
  } else {
    console.debug(message);
  }
}

/**
 * Get current metrics
 */
export function getMetrics(): Readonly<Partial<PerformanceMetrics>> {
  return Object.freeze({ ...metrics });
}
