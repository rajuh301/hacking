/** @type {import('next').NextConfig} */
const nextConfig = {
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