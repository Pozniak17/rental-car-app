import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'ac.goit.global' }],
    qualities: [100],
  },
};

export default nextConfig;
