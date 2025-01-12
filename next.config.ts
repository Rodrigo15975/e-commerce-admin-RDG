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
  outputFileTracingRoot: './',
  telemetry: false,
}

export default nextConfig
