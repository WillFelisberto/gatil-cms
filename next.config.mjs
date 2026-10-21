import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },

  experimental: {
    reactCompiler: false
  },

  webpack(config, { isServer }) {
    if (isServer) {
      if (!config.externals) config.externals = [];
      config.externals.push('@libsql/win32-x64-msvc');
    }
    return config;
  }
};

export default withPayload(nextConfig);
