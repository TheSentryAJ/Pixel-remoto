
import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

const nextConfig = (phase: string, { defaultConfig }: { defaultConfig: NextConfig }): NextConfig => {
  const config: NextConfig = {
    ...defaultConfig,
    /* config options here */
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.co',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
          port: '',
          pathname: '/**',
        }
      ],
    },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    config.allowedDevOrigins = ['http://9000-firebase-studio-1748890683249.cluster-l6vkdperq5ebaqo3qy4ksvoqom.cloudworkstations.dev'];
  }

  return config;
};

export default nextConfig;
