// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 2678400, // This is 31 days, just noting
	dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v5.airtableusercontent.com',
        port: '', // Optional, but good for explicitness if no port
        pathname: '/**', // Optional, allow any path under this hostname
      },
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com', // Allows any subdomains
        port: '',
        pathname: '/**', // Optional, allow any path under this hostname
      },
    ],
  },
};

module.exports = nextConfig;