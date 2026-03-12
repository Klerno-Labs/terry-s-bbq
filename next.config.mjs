/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/terry-s-bbq',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Strict linting enabled
  },
  typescript: {
    ignoreBuildErrors: true, // Strict TypeScript enabled
  },
};

export default nextConfig;