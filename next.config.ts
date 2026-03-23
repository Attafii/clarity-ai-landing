import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ============================================
  // TURBOPACK CONFIGURATION
  // ============================================
  turbopack: {
    root: __dirname,
  },

  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-sheet',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toggle',
      '@radix-ui/react-tooltip',
      'framer-motion',
      'lucide-react',
    ],
  },

  // ============================================
  // IMAGE OPTIMIZATION
  // ============================================
  images: {
    // Enable AVIF and WebP formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Aggressive caching for optimized images
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // ============================================
  // PRODUCTION OPTIMIZATIONS
  // ============================================
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,

  // ============================================
  // RESPONSE HEADERS FOR CACHING
  // ============================================
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // ============================================
  // WEBPACK OPTIMIZATION
  // ============================================
  webpack: (config, { isServer }) => {
    // Optimize split chunks for better caching
    if (!isServer && config.optimization) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Third-party vendor code
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          // Radix UI  UI components
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix',
            priority: 20,
            reuseExistingChunk: true,
          },
          // Animation libraries
          animations: {
            test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
            name: 'animations',
            priority: 15,
            reuseExistingChunk: true,
          },
          // Shared code between chunks
          common: {
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
    }

    return config;
  },

  // ============================================
  // ENVIRONMENT VARIABLES
  // ============================================
  env: {
    // For performance monitoring
    NEXT_PUBLIC_ENABLE_ANALYTICS: 'true',
  },

  // ============================================
  // TYPESCRIPT
  // ============================================
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // ============================================
  // ESLINT (During build)
  // ============================================
  eslint: {
    ignoreDuringBuilds: false,
  },

  // ============================================
  // REWRITE API CALLS (optional, for aggregation)
  // ============================================
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
