import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
    unoptimized: true,
  },

  // optimizeCss: true,

  // outputFileTracingRoot: 'src',
  // telemetry: false,
  // appDir: true,
  // poweredByHeader: false,
}

export default nextConfig
