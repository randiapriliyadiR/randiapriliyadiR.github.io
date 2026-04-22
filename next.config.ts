import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons', 'lucide-react', 'three'],
  },
};

export default nextConfig;
