/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fzyl4-1.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      // You can also add a wildcard to allow all Facebook subdomains if needed:
      // {
      //   protocol: 'https',
      //   hostname: '**.fbcdn.net',
      // },
    ],
  },
};

export default nextConfig;