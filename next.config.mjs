/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        // 'incremental' value allows you to adopt PPR for specific routes.
      ppr: 'incremental',
    },
  };

export default nextConfig;
