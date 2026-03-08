/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false, // Strict linting enabled
  },
  typescript: {
    ignoreBuildErrors: false, // Strict TypeScript enabled
  },
};

export default nextConfig;