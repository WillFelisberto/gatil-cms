import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
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
  // webpack(config) {
  //   // Remove o loader padrão de SVG
  //   const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
  //   if (fileLoaderRule) {
  //     fileLoaderRule.exclude = /\.svg$/i;
  //   }

  //   // Adiciona o SVGR
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ['@svgr/webpack']
  //   });

  //   return config;
  // }
};

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withPayload(nextConfig);
